<template>
  <v-btn fab dark small color="white" @click="click">
    <v-icon color="primary"> add </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "AddButton",
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
