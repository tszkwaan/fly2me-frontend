<template>
  <div id="flight-list-area">
    <flight-list :flights="flights" @trigger="trigger" />
  </div>
</template>

<script>
import Vue from "vue";

import FlightList from "@/components/flight/FlightList.vue";

import FlightApi from "@/api/flight.ts";
import UserApi from "@/api/user.ts";

export default {
  name: "FlightListArea",
  components: {
    FlightList,
  },
  props: {
    listType: {
      type: String,
      default: "future",
    },
  },
  data() {
    return {
      flights: [],
    };
  },
  created() {
    this.getFlights();
  },
  methods: {
    async getFlights() {
      await FlightApi.getMyFlightList(this.listType)
        .then((res) => {
          this.flights = res.data.flights;
        })
        .catch((err) => {
          this.$emit("showSnackbar", "Failed to get flights! :(");
          console.error(err);
        });
    },
    trigger(action, flight) {
      this.$emit("trigger", action, flight);
    },
    async removeFlight(flight) {
      let res = await FlightApi.deleteFlight(flight.id)
        .then((res) => {
          this.flights = this.flights.filter(
            (flightItem) => flightItem.id !== flight.id
          );
          this.$emit("showSnackbar", "Flight deleted!");
        })
        .catch((err) => {
          this.$emit("showSnackbar", "Failed to delete flight! :(");
        });
    },
    addFlightToList(flight) {
      this.flights.push(flight);
    },
    sortFlightListByFromDate() {
      this.flights.sort(function (a, b) {
        return new Date(b.fromDate) - new Date(a.fromDate);
      });
    },
    setFlights(event, flight) {
      switch (event) {
        case "create":
          this.addFlightToList(flight);
          this.sortFlightListByFromDate();
          break;
        case "update":
          const index = this.flights.findIndex(flightItem => flightItem.id === flight.id);
          if (index > -1) {
            Vue.set(this.flights, index, flight);
          }
          break;
      }
    },
  },
  watch: {
    listType() {
      this.getFlights();
    },
  },
};
</script>

<style scoped>
#flight-list-area {
  text-align: center;
}
@media(max-width: 509px) {
    #flight-list-area {
        padding: 10px;
    }
}
</style>
