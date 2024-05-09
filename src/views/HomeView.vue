<template>
  <div class="home">
    <h1>{{ t("home.title") }}</h1>
    <div v-if="error" class="error">
      {{ t("error.error") + t("error." + error) }}
    </div>
    <button v-if="!connected" @click="connect">
      {{ t("home.connect") }}
    </button>
    <button v-else @click="disconnect">{{ t("home.disconnect") }}</button>
    <button v-if="connected" @click="downloadAll()">
      {{ $t("home.download-all") }}
    </button>
    <button v-if="connected" @click="upload()">
      {{ $t("home.upload") }}
    </button>
    <div v-if="connected">
      <h2>{{ $t("home.records") }}</h2>
      <p>
        {{
          $t("home.size") +
          " " +
          size +
          " / " +
          totalSize +
          " " +
          $t("home.bytes")
        }}
        ({{ Math.round((size / totalSize) * 100) }}%)
      </p>
      <div
        v-for="(record, index) in storage['records']"
        :key="index"
        class="recordList"
      >
        <span>{{ record.name + "." + record.type }}</span>
        <button @click="renameRecord(index)">
          {{ $t("home.rename") }}
        </button>
        <button @click="downloadRecord(index)">
          {{ $t("home.download") }}
        </button>
        <button @click="deleteRecord(index)">
          {{ $t("home.delete") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Numworks from "upsilon.js";
import JSZip from "jszip";

export default defineComponent({
  name: "HomeView",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t };
  },
  data() {
    return {
      calculator: new Numworks(),
      connected: false,
      storage: {},
      hasUSB: navigator.usb != null,
      error: "",
      totalSize: 0,
    };
  },
  computed: {
    size() {
      let size = 0;
      for (const record of this.storage.records) {
        if (record.type == "py") {
          size += record.code.length;
          size += record.name.length + 1 + record.type.length;
          // We assume it's ASCII (IDK if it work using UTF-8 anyway)
          // 8 bits header + 16 bits size + \0 name + \0 content
          size += 1 + 2 + 1 + 1;
        } else {
          size += record.data.size;
          size += record.name.length + 1 + record.type.length;
          // 8 bits header + 16 bits size + \0 name
          size += 1 + 2 + 1;
        }
      }
      return size;
    },
  },
  mounted() {
    if (!this.hasUSB) {
      this.errorHandler("no-usb");
      return;
    }
    this.calculator.autoConnect(this.connectedHandler);
    const _this = this;
    navigator.usb.addEventListener("disconnect", function (e) {
      _this.calculator.onUnexpectedDisconnect(
        e,
        _this.unexpectedDisconnectHandler
      );
    });
  },
  methods: {
    connect() {
      this.calculator.detect(this.connectedHandler, this.errorHandler);
    },
    disconnect(event) {
      event.preventDefault();
      this.calculator.device.device_.close();
      this.calculator.stopAutoConnect();
      this.disconnectedHandler();
    },
    async connectedHandler() {
      console.log("connected");
      this.connected = true;
      await this.saveStorage();
      this.platformInfo = await this.calculator.getPlatformInfo();
      this.totalSize = this.platformInfo["storage"]["size"];
      console.log(this.totalSize);
    },
    disconnectedHandler() {
      console.log("disconnected");
      this.connected = false;
    },
    unexpectedDisconnectHandler() {
      console.log("unexpected disconnect");
      this.calculator.autoConnect(this.connectedHandler);
      this.disconnectedHandler();
    },
    errorHandler(error) {
      console.error(error);
      this.error = error;
    },
    async saveStorage() {
      // Get the platform Info
      this.storage = await this.calculator.backupStorage(function (data) {
        this.storage = data;
      }, this.errorHandler);
      console.log(this.storage);
    },
    async deleteRecord(index) {
      this.storage.records.splice(index, 1);
      await this.calculator.installStorage(this.storage, function () {});
      console.log("Success");
      await this.saveStorage();
    },
    async renameRecord(index) {
      const record = this.storage.records[index];
      const name = prompt(this.t("home.rename-prompt"), record.name);
      if (name) {
        record.name = name;
        await this.calculator.installStorage(this.storage, function () {});
        console.log("Success");
        await this.saveStorage();
      }
    },
    recordToBlob(record) {
      if (record.code !== undefined) {
        const blob = new Blob([record.code], {
          type: "application/octet-stream",
        });
        return blob;
      } else {
        const blob = new Blob([record.data], {
          type: "application/octet-stream",
        });
        return blob;
      }
    },
    async downloadRecord(index) {
      const record = this.storage.records[index];
      // Download the file
      const blob = this.recordToBlob(record);
      // Use the download attribute to download the file
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = record.name + "." + record.type;
      link.click();
    },
    async downloadAll() {
      const zip = new JSZip();
      for (const record of this.storage.records) {
        if (record.type == "py") {
          zip.file(record.name + "." + record.type, record.code);
        } else {
          zip.file(record.name + "." + record.type, record.data);
        }
      }
      const blob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "backup.zip";
      link.click();
    },
    async upload() {
      const input = document.createElement("input");
      input.type = "file";
      // input.accept = ".py,.zip";
      input.onchange = (e) => {
        for (const file of e.target.files) {
          // console.log(file.name);
          // If file name ends with .zip, unzip it
          if (file.name.endsWith(".zip")) {
            this.uploadZip(file);
          } else if (file.name.endsWith(".py")) {
            this.uploadScript(file);
          } else {
            this.uploadFile(file);
          }
        }
      };
      input.click();
    },
    async uploadScript(file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener("load", async () => {
        let code = reader.result;
        const name = file.name.replace(/\.[^/.]+$/, "");
        const type = file.name.split(".").pop();
        this.storage.records.push({ name, type, code });
        await this.calculator.installStorage(this.storage, function () {});
        console.log("Success");
        this.saveStorage();
      });
    },
    async uploadFile(file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.addEventListener("load", async () => {
        let data = new Blob([reader.result]);
        const name = file.name.replace(/\.[^/.]+$/, "");
        const type = file.name.split(".").pop();
        this.storage.records.push({ name, type, data });
        await this.calculator.installStorage(this.storage, function () {});
        console.log("Success");
        this.saveStorage();
      });
    },
    async uploadZip(file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.addEventListener("load", async () => {
        const zip = await JSZip.loadAsync(reader.result);
        for (const [name, file] of Object.entries(zip.files)) {
          const type = name.split(".").pop();
          const nameWithoutExtension = name.replace(/\.[^/.]+$/, "");
          if (type === "py") {
            const code = await file.async("string");
            this.storage.records.push({
              name: nameWithoutExtension,
              type,
              code,
            });
          } else {
            const data = await file.async("blob");
            this.storage.records.push({
              name: nameWithoutExtension,
              type,
              data,
            });
          }
          console.log(this.storage);
        }
        await this.calculator.installStorage(this.storage, function () {});
        console.log("Success");
        this.saveStorage();
      });
    },
  },
});
</script>
