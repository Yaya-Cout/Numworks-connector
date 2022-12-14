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
    };
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
      await this.calculator.installStorage(this.storage, function () {
        console.log("Success");
      });
    },
    async renameRecord(index) {
      const record = this.storage.records[index];
      const name = prompt(this.t("home.rename-prompt"), record.name);
      if (name) {
        record.name = name;
        await this.calculator.installStorage(this.storage, function () {
          console.log("Success");
        });
      }
    },
    async downloadRecord(index) {
      const record = this.storage.records[index];
      // Download the file
      const blob = new Blob([record.code], {
        type: "application/octet-stream",
      });

      // Use the download attribute to download the file
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = record.name + "." + record.type;
      link.click();
    },
    async downloadAll() {
      const zip = new JSZip();
      for (const record of this.storage.records) {
        zip.file(record.name + "." + record.type, record.code);
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
          } else {
            this.uploadFile(file);
          }
        }
      };
      input.click();
    },
    async uploadFile(file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener("load", async () => {
        let code = reader.result;
        const name = file.name.replace(/\.[^/.]+$/, "");
        const type = file.name.split(".").pop();
        this.storage.records.push({ name, type, code });
        await this.calculator.installStorage(this.storage, function () {
          console.log("Success");
        });
      });
    },
    async uploadZip(file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.addEventListener("load", async () => {
        const zip = await JSZip.loadAsync(reader.result);
        for (const [name, file] of Object.entries(zip.files)) {
          const code = await file.async("string");
          const type = name.split(".").pop();
          const nameWithoutExtension = name.replace(/\.[^/.]+$/, "");
          this.storage.records.push({ name: nameWithoutExtension, type, code });
          console.log(this.storage);
          console.log(nameWithoutExtension, type, code);
        }
        await this.calculator.installStorage(this.storage, function () {
          console.log("Success");
        });
      });
    },
  },
});
</script>
