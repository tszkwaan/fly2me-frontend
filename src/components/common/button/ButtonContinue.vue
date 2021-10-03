<template>
  <v-btn small class="primary" @click="click"> Continue </v-btn>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
