<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" @click="edit">
        <v-icon> edit </v-icon>
      </v-btn>
    </template>
    <span> Edit flight </span>
  </v-tooltip>
</template>

<script lang="ts">
export default {
  name: "EditButton",
  props: {
    isMini: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    edit(): void {
      this.$emit("trigger", "edit");
    },
  },
};
</script>

<style scoped></style>
