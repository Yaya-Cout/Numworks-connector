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
    <div v-if="connected">
      <button @click="newFile">{{}}</button>
      <div
        v-for="(record, index) in storage['records']"
        :key="index"
        class="recordList"
      >
        <div>
          <span>{{ record.name + "." + record.type }}</span>
          <button @click="deleteRecord(index)">
            {{ $t("home.delete") }}
          </button>
          <button @click="renameRecord(index)">
            {{ $t("home.rename") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import Numworks from "upsilon.js";

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
      await this.calculator.installStorage(this.storage, this.errorHandler);
    },
    async renameRecord(index) {
      const record = this.storage.records[index];
      const name = prompt(this.t("home.rename-prompt"), record.name);
      if (name) {
        record.name = name;
        await this.calculator.installStorage(this.storage, this.errorHandler);
      }
    },
  },
});
</script>
