<template>
  <div>
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "./components/NavbarComponent.vue";

export default defineComponent({
  name: "App",
  components: { NavbarComponent },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none;
}
</style>
