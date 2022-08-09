<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <h1>{{ t("about.title") }}</h1>
    <p>{{ t("about.description") }}</p>
    <a href="https://github.com/Yaya-Cout/Numworks-connector">{{
      t("about.github")
    }}</a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "AboutView",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });

    // Something todo ..

    return { t };
  },
});
</script>
