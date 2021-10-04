<template>
  <v-app id="app-container" light>
    <navbar
      @toggleSidebar="toggleSidebar"
      @toggleLoginDialog="toggleLoginDialog"
    />
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/common/Navbar.vue";
import Footer from "@/components/common/Footer.vue";
import MaterialIcons from "material-icons";

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
    Footer,
    MaterialIcons
  },
  methods: {
    toggleSidebar(): void {
      this.$refs.sidebar.toggleSidebar();
    },
    toggleLoginDialog(): void {
      this.$refs.loginDialog.toggleDialog();
    },
  }
});
</script>

<style scoped lang="scss">
#app-container {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  text-align: center;
}
</style>