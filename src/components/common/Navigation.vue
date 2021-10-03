<template>
  <v-card>
    <v-toolbar class="transparent">
      <v-toolbar-title>
        <img id="logo" src="/img/logo.png" alt="Fly2me logo" />
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-if="!session.isLoggedIn" @click="toggleLoginDialog">
          Login
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on">
              <div class="menu__content__name">
                <v-avatar size="40px">
                  <v-gravatar
                    :email="session.username"
                    default-img="identicon"
                  />
                </v-avatar>
                {{ session.username }}
              </div>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
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
    watch: {
      session: {
        deep: true,
        handler: function (value) {
          console.log("session::");
          console.log(session);
        },
      },
    },
  },
};
</script>

<style scoped>
#logo {
  margin-top: 8px;
  height: 3rem;
}
.menu__content__name {
  color: white;
  text-transform: uppercase;
}
.theme--dark.v-btn.v-btn--has-bg {
  background: transparent;
  box-shadow: unset;
}
</style>
