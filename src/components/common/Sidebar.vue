<template>
  <v-navigation-drawer v-model="showSidebar" clipped fixed app>
    <v-list dense>
      <v-list-item>
        <v-list-item-action>
          <v-icon>airplanemode_active</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Flights</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style></style>
