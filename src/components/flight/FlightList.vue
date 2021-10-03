<template>
  <div id="flight-list">
    <template v-if="flights.length > 0">
      <flight-box
        v-for="flight in flights"
        :key="`flight-${flight.id}`"
        :flight="flight"
        @trigger="trigger"
      />
    </template>
    <div v-else class="error-message headline">No flights yet, add now!</div>
  </div>
</template>

<script>
import FlightBox from "@/components/flight/FlightBox.vue";

export default {
  name: "FlightList",
  components: {
    FlightBox,
  },
  props: {
    flights: {
      type: Array,
    },
  },
  methods: {
    trigger(action, flight) {
      this.$emit("trigger", action, flight);
    },
  },
};
</script>

<style>
.flight-box-inner-box {
  padding: 0.5rem;
}
.flight-details {
  padding-left: 1.5rem;
}
#flight-list {
  padding-top: 3rem;
  height: 70vh;
  overflow-y: auto;
}
.to {
  text-align: left;
}
.from {
  text-align: right;
}
.connector {
  text-align: center;
}
.row-airline-detail {
  margin-top: 1.5rem;
}
.row-flight-time {
  margin-top: 1.5rem;
}
.flight-user {
  justify-content: flex-end;
}
.rows-flight-details {
  margin-bottom: 1rem;
}
.detail-section {
  margin-bottom: 0.8rem;
}
.error-message {
  color: white;
  margin-top: 50px;
}
</style>
