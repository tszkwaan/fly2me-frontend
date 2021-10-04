<template>
  <v-layout id="flights-container" row wrap justify-center>
    <v-flex md2 d-xs-none />
    <v-flex xs12 md5>
      <v-tabs v-model="activeTab" fixed-tabs color="white" slider-color="white">
        <v-tab v-for="(tab, index) in tabs" :key="`tab-${index}`" ripple>
          {{ tab }}
        </v-tab>
      </v-tabs>
      <v-card id="tab-content">
        <flight-list-area
          ref="flightListArea"
          :list-type="getListType"
          @trigger="trigger"
          @showSnackbar="showSnackbar"
        />
      </v-card>
    </v-flex>

    <v-flex md2 class="operation-bar">
      <add-button @add="showAddFlightDialog" />
    </v-flex>
    <v-flex xs12>
      <flight-form-dialog ref="flightFormDialog" @notifyEvent="notifyEvent" />
    </v-flex>
    <v-flex xs12>
      <confirm-delete-dialog
        ref="confirmDeleteDialog"
        componentType="flight"
        @trigger="trigger"
      />
    </v-flex>
    <v-flex xs12>
      <snackbar ref="snackbar"> </snackbar>
    </v-flex>
  </v-layout>
</template>

<script>
import FlightListArea from "@/components/flight/FlightListArea.vue";
import FlightFormDialog from "@/components/flight/AddFlightDialog.vue";
import ConfirmDeleteDialog from "@/components/common/dialog/ConfirmDeleteDialog.vue";
import Snackbar from "@/components/common/Snackbar.vue";
import AddButton from "@/components/common/button/AddButton.vue";

import { mapState } from "vuex";

export default {
  name: "flights-page",
  components: {
    FlightListArea,
    FlightFormDialog,
    ConfirmDeleteDialog,
    Snackbar,
    AddButton,
  },
  data() {
    return {
      isDrawerDisplay: false,
      tabs: ["Future", "History"],
      activeTab: null,
    };
  },
  computed: {
    ...mapState({
      session: (state) => state.session,
    }),
    getListType() {
      return this.activeTab === 0 ? "future" : "history";
    },
  },
  methods: {
    toggleDrawer() {
      this.isDrawerDisplay = !this.isDrawerDisplay;
    },
    trigger(action, flight = null) {
      switch (action) {
        case "edit":
          this.$refs.flightFormDialog.showDialog(flight, "edit");
          break;
        case "confirmRemove":
          this.$refs.confirmDeleteDialog.toggleDialog(flight);
          break;
        case "remove":
          this.$refs.flightListArea.removeFlight(flight);
          break;
      }
    },
    showSnackbar(message) {
      this.$refs.snackbar.display(message);
    },
    notifyEvent(event, result, flight) {
      let message;
      console.log("in notifyEvent: " + result);
      console.log(flight);
      if (result === "success") {
        this.$refs.flightListArea.setFlights(event, flight);
        message = `Flight ${event === "create" ? "created" : "updated"}!`;
      } else {
        message = `Failed to ${event} flight`;
      }
      this.showSnackbar(message);
    },
    showAddFlightDialog() {
      this.$refs.flightFormDialog.addFlight();
    },
  },
};
</script>

<style>
/* start of flight tab style */
.v-item-group.theme--light.v-slide-group.v-tabs-bar,
.theme--light.v-card,
#flight-list,
.flight-box {
  background-color: transparent;
}
.theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)[aria-selected="false"] {
  color: #fff;
}
/* enf od flight tab style */

.v-dialog .v-card {
  background-color: #fff;
}

.operation-bar {
  text-align: left;
}

#tab-content {
  box-shadow: unset;
}

@media (max-width: 509px) {
  .operation-bar {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }
}
</style>
