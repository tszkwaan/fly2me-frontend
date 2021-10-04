<template>
  <v-btn :fab="fab" :class="{ primary: primary }" small @click="onClick">
    <v-icon v-if="icon" color="primary"> save </v-icon>
    <span v-else>Save</span>
  </v-btn>
</template>

<script lang="ts">
export default {
  name: 'SaveButton',
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
    onClick(): void {
      this.$emit('save');
    },
  },
};
</script>

<style scoped></style>
