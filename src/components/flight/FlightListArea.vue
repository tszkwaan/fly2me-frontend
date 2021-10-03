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
    showFuture: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      flights: [],
    };
  },
  created() {
    this.getUsers();
    this.getFlights();
  },
  methods: {
    async getFlights() {
      await FlightApi.getMyFlightList(this.showFuture ? "future" : "history")
        .then((res) => {
          this.flights = res.data.flights;
          this.mapFlightWithUser();
        })
        .catch((err) => {
          console.log(err);
          this.$emit("showSnackbar", "Failed to get flights! :(");
        });
    },
    async getUsers() {
      await UserApi.getAllUser()
        .then((res) => {
          this.users = res.data;
          this.mapFlightWithUser();
        })
        .catch((err) => {
          console.log(err);
          this.$emit("showSnackbar", "Failed to get users! :(");
        });
    },
    mapFlightWithUser() {
      const _this = this;
      if (_this.users) {
        _this.flights = _this.flights.map((flight) => {
          let userId = flight.userId;
          let user = _this.users.find((userItem) => userItem.id === userId);
          flight.user = user;
          return flight;
        });
      }
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
    setFlights(event, flight) {
      const _this = this;
      switch (event) {
        case "create":
          this.flights.push(flight);
          break;
        case "update":
          let existingFlight = this.flights.find(
            (flightItem) => flightItem.id === flight.id
          );
          if (existingFlight !== undefined) {
            let index = this.flights.findIndex(
              (flightItem) => flightItem.id === flight.id
            );
            Vue.set(_this.flights, index, flight);
          }
          break;
      }
    },
  },
  watch: {
    showFuture() {
      this.getFlights();
    },
  },
};
</script>

<style>
#flight-list-area {
  text-align: center;
}
</style>
