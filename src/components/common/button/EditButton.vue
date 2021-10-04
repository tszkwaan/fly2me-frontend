<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" @click="onClick">
        <v-icon> edit </v-icon>
      </v-btn>
    </template>
    <span> Edit flight </span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'EditButton',
  props: {
    isMini: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClick(): void {
      this.$emit('trigger', 'edit');
    },
  },
});
</script>

<style scoped></style>
