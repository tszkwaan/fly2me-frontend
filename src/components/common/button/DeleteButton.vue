<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" @click="remove">
        <v-icon> delete </v-icon>
      </v-btn>
    </template>
    <span> Delete flight </span>
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
    remove(): void {
      this.$emit("trigger", "confirmRemove");
    },
  },
};
</script>

<style scoped></style>
