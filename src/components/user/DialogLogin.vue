<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="400px">
      <v-card id="card-login">
        <v-card-title class="font-weight-thin title"> Login </v-card-title>
        <v-card-text id="card-login-form">
          <login-form ref="loginForm" @closeDialog="toggleDialog" />
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap>
            <v-flex xs12 sm4>
              <v-btn block @click.native="toggleDialog"> Cancel </v-btn>
            </v-flex>
            <v-flex sm4 />
            <v-flex xs12 sm4>
              <v-btn color="primary" @click.native="onLoginButtonClick">
                Login
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import LoginForm from "@/components/user/FormLogin.vue";

export default {
  name: "LoginDialog",
  components: {
    LoginForm,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    toggleDialog(value = !this.dialog) {
      this.dialog = value;
    },
    onLoginButtonClick() {
      this.$refs.loginForm.login();
    },
  },
};
</script>

<style scoped>
.v-dialog {
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9)
  );
  min-height: 400px;
}

#card-login-form {
  padding: 25px 30px;
}
.v-card__actions {
  padding-bottom: 15px;
}
</style>
