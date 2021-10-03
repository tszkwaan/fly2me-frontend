<template>
  <v-app id="container-app" light>
    <navigation
      @toggleSidebar="toggleSidebar"
      @toggleLoginDialog="toggleLoginDialog"
    />
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
      <!-- <login-dialog
        ref="loginDialog"/> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/common/Navigation.vue";
import Footer from "@/components/common/Footer.vue";
// import LoginDialog from '@/components/user/DialogLogin.vue'
import MaterialIcons from "material-icons";
// import { mapState } from 'vuex'

export default Vue.extend({
  name: "App",
  components: {
    Navigation,
    Footer,
    MaterialIcons,
    // LoginDialog
  },
  computed: {
    // ...mapState(['session'])
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggleSidebar();
    },
    toggleLoginDialog() {
      this.$refs.loginDialog.toggleDialog();
    },
  },
  created() {
    // if (this.session.isLoggedIn) {
    //   this.$session.start()
    //   this.$session.set('jwt', this.session.token)
    //   this.$axios.defaults.headers.common['jwtHeader'] = 'Bearer ' + this.session.token
    // }
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  padding-top: 0px !important;
}
.v-label {
  font-size: 1rem;
}
.dialog-title {
  background: #60819d; /* fallback for old browsers */
  color: #ffffff;
}
.mini-btn {
  width: 30px !important;
  height: 30px !important;
}
.operation-btn {
  margin: 0;
  margin-bottom: 5px;
}
#container-app {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  text-align: center;
}
.dialog-title {
  text-align: left;
}
.form-section-header {
  font-size: 18px;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.form-section-subheader {
  font-size: 14px;
  text-align: left;
  font-style: italic;
  margin-bottom: 5px;
}
.optional {
  font-style: italic;
  font-size: 12px;
}
.v-dialog .v-card {
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9)
  );
  text-align: center;
}
</style>
