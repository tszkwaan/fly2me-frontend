<template>
  <v-toolbar dark id="navbar" class="transparent">
    <v-toolbar-title>
      <img id="logo" src="/img/logo.png" alt="Fly2me logo" />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn v-if="!session.isLoggedIn" flat @click="toggleLoginDialog">
        Login
      </v-btn>
      <v-menu v-else offset-y>
        <v-btn
          slot="activator"
          style="background-color: rgba(255, 255, 255, 0); box-shadow: none"
        >
          <div class="menu__content__name">
            <v-avatar size="40px">
              <v-gravatar :email="session.username" default-img="identicon" />
            </v-avatar>
            {{ session.username }}
          </div>
        </v-btn>
        <v-list>
          <v-list-tile @click="logout">
            <v-list-tile-title> Logout </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Session from "@/model/session.ts";
import { mapState } from "vuex";

export default {
  name: "Navigation",
  components: {},
  data: () => ({
    drawer: true,
  }),
  computed: {
    ...mapState(["session"]),
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
    toggleLoginDialog() {
      this.$emit("toggleLoginDialog");
    },
    logout() {
      this.$store.commit("setSession", new Session());
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style>
#navbar {
  padding-top: 2px;
  /* background-color: #A8BFCE !IMPORTANT; */
}
#logo {
  margin-top: 8px;
  height: 3rem;
}
.menu__content__name {
  color: white;
  text-transform: uppercase;
}
</style>
