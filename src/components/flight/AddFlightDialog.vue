<template>
  <v-dialog v-model="isDisplay" content-class="form-dialog" width="500">
    <v-card id="card-login">
      <v-card-title class="font-weight-thin title"> Add a flight </v-card-title>
      <v-card-text id="card-flight-form">
        <flight-form
          ref="flightForm"
          :originalFlight="originalFlight"
          :formMode="formMode"
          @notifyEvent="notifyEvent"
        />
      </v-card-text>
    </v-card>
    <!--
    <v-card>
      <v-card-title
        class="dialog-title">
        <v-flex
          xs8
          sm10
          class="title">
          Add flight
        </v-flex>
        <v-flex
          xs4
          sm2
          class="operation-buttons">
          <save-button
            @trigger="saveFlight"/>
        </v-flex>
      </v-card-title>
      <v-card-text
        class="form-card">
        <flight-form
          ref="flightForm"
          :originalFlight="originalFlight"
          :formMode="formMode"
          @notifyEvent="notifyEvent"/>
      </v-card-text>
    </v-card>
    -->
  </v-dialog>
</template>

<script>
import FlightForm from "@/components/flight/FlightForm.vue";
import SaveButton from "@/components/common/button/SaveButton.vue";
import Flight from "@/model/flight.ts";

import { cloneDeep } from "lodash";

export default {
  name: "AddFlightDialog",
  components: {
    FlightForm,
    SaveButton,
  },
  props: {},
  data() {
    return {
      isDisplay: false,
      originalFlight: new Flight(),
      formMode: "create",
    };
  },
  methods: {
    saveFlight() {
      this.$refs.flightForm.saveFlight();
    },
    showDialog(flight, mode) {
      if (mode) {
        this.formMode = mode;
      }
      this.originalFlight = cloneDeep(flight);
      this.isDisplay = true;
    },
    resetFormMode() {
      this.formMode = "create";
    },
    resetDialog() {
      this.resetFormMode();
      this.originalFlight = new Flight();
    },
    notifyEvent(event, result, flight) {
      this.isDisplay = false;
      this.$emit("notifyEvent", event, result, flight);
    },
    addFlight() {
      this.resetFormMode();
      this.isDisplay = true;
    },
  },
  watch: {
    isDisplay() {
      if (!this.isDisplay) {
        this.resetDialog();
      }
    },
  },
};
</script>

<style scoped>
.operation-buttons {
  text-align: right;
}
</style>
