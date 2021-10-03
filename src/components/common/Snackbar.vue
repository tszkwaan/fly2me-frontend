<template>
  <v-snackbar v-model="showSnackbar" right top :timeout="5000">
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  data() {
    return {
      showSnackbar: false,
      text: "",
    };
  },
  methods: {
    display(message) {
      this.showSnackbar = true;
      if (message !== undefined) {
        this.text = message;
      }
    },
  },
};
</script>

<style></style>
