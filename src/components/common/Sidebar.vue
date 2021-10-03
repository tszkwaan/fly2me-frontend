<template>
  <v-navigation-drawer v-model="showSidebar" clipped fixed app>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>airplanemode_active</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Flights</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
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
