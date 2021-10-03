<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab small icon v-bind="attrs" v-on="on" @click="click">
        <v-icon color="primary"> add </v-icon>
      </v-btn>
    </template>
    <span> Add flight </span>
  </v-tooltip>
</template>

<script lang="ts">
export default {
  name: "AddButton",
  methods: {
    click(): void {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  background-color: #fff;
}
</style>
