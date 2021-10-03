<template>
  <v-tooltip bottom>
    <v-icon slot="activator" @click="edit"> edit </v-icon>
    <span> Edit flight </span>
  </v-tooltip>
</template>

<script>
export default {
  name: "EditButton",
  props: {
    isMini: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    edit() {
      this.$emit("trigger", "edit");
    },
  },
};
</script>

<style scoped></style>
