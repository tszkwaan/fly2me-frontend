<template>
  <v-btn :fab="fab" :class="{ primary: primary }" small @click="save">
    <v-icon v-if="icon" color="primary"> save </v-icon>
    <span v-else>Save</span>
  </v-btn>
</template>

<script>
export default {
  name: "SaveButton",
  props: {
    fab: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: Boolean,
      default: true,
    },
    primary: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    save() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
