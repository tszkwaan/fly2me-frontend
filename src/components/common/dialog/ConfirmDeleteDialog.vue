<template>
  <v-dialog
    content-class="dialog-confirm-delete"
    v-model="isShow"
    max-width="290"
  >
    <v-card>
      <v-card-text>
        Are you sure to delete the {{ componentType }}?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="flat" @click="toggleDialog"> Cancel </v-btn>
        <v-btn text="flat" color="#B71C1C" dark @click="confirmDelete">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteDialopg",
  props: {
    componentType: {
      type: String,
      default: "component",
    },
  },
  data() {
    return {
      isShow: false,
      component: undefined,
    };
  },
  methods: {
    confirmDelete() {
      this.isShow = false;
      this.$emit("trigger", "remove", this.component);
    },
    toggleDialog(component) {
      this.component = component;
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style>
.dialog-confirm-delete {
  background: white !important;
}
</style>
