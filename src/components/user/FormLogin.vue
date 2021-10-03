<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-text-field v-model="user.username" label="Username" required />
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="user.password"
        label="Password"
        type="password"
        required
      />
    </v-flex>
    <snackbar ref="snackbar" />
  </v-layout>
</template>

<script>
import Snackbar from "@/components/common/Snackbar.vue";
import User from "@/model/user.ts";
import UserApi from "@/api/user.ts";

import { mapMutations } from "vuex";

export default {
  name: "LoginForm",
  components: {
    Snackbar,
  },
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    async login() {
      const _this = this;
      await UserApi.login(_this.user)
        .then((res) => {
          if (res.data.token && res.data.token.trim()) {
            this.$session.start();
            this.$session.set("jwt", res.data.token);
            this.$axios.defaults.headers.common["jwtHeader"] =
              "Bearer " + res.data.token;
            let result = await UserApi.getUserIdByName(_this.user.username);
            if (result) {
              let userId = result.data;
              let session = {
                token: res.data.token,
                username: _this.user.username,
                isLoggedIn: true,
                userId: userId,
              };
              _this.$store.commit("setSession", session);
              _this.$emit("closeDialog", false);
              _this.$router.push("/flights");
            }
          }
        })
        .catch((err) => {
          this.$refs.snackbar.display("Login failed");
        });
    },
    ...mapMutations["user"],
  },
};
</script>

<style scoped></style>
