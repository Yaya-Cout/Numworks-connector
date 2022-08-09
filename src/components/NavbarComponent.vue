<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "NavbarComponent",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t };
  },
});
</script>
