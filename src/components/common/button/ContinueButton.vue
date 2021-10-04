<template>
  <v-btn small class="primary" @click="onClick"> Continue </v-btn>
</template>

<script lang="ts">
export default {
  name: 'ContinueButton',
  methods: {
    onClick(): void {
      this.$emit('continue');
    },
  },
};
</script>

<style scoped></style>
