<template>
  <v-btn small class="primary" @click="click"> Continue </v-btn>
</template>

<script lang="ts">
export default {
  methods: {
    click(): void {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
