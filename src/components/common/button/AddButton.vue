<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab small icon v-bind="attrs" v-on="on" @click="onClick">
        <v-icon color="primary"> add </v-icon>
      </v-btn>
    </template>
    <span> Add flight </span>
  </v-tooltip>
</template>

<script lang="ts">
export default {
  name: 'AddButton',
  methods: {
    onClick(): void {
      this.$emit('add');
    },
  },
};
</script>

<style scoped>
button {
  background-color: #fff;
}
</style>
