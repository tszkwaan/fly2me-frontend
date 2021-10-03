<template>
  <v-tooltip bottom>
    <v-icon slot="activator" @click="remove"> delete </v-icon>
    <span> Delete flight </span>
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
    remove() {
      this.$emit("trigger", "confirmRemove");
    },
  },
};
</script>

<style scoped></style>
