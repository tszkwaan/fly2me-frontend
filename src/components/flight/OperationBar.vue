<template>
  <v-layout row class="flight-operation-bar">
    <edit-button @trigger="trigger" />
    <delete-button @trigger="trigger" />
  </v-layout>
</template>

<script>
import EditButton from "@/components/common/button/EditButton.vue";
import DeleteButton from "@/components/common/button/DeleteButton.vue";

export default {
  name: "OperationBar",
  components: {
    EditButton,
    DeleteButton,
  },
  methods: {
    trigger(action) {
      this.$emit("trigger", action);
    },
  },
};
</script>

<style type="scss">
.flight-operation-bar {
  flex-direction: column;
  float: right;
}
.flight-box .flight-operation-bar {
  display: none;
}
.flight-box:hover .flight-operation-bar {
  display: block;
}
@media(max-width: 509px) {
    .flight-box .flight-operation-bar {
        display: block;
    }
}
</style>
