<template>
  <v-layout row wrap justify-center>
    <v-flex md10 sm10 xs12 class="flight-box-wrapper">
      <div class="flight-box">
        <v-flex xs12 class="flight-box-inner-box flight-basic">
          <v-layout row wrap>
            <v-flex xs6 class="flight-detail flight-date">
              <span>{{ flight.fromDate }}</span>
            </v-flex>
            <v-flex xs6>
              <flight-operation-bar @trigger="trigger" />
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 style="margin-top: 5px">
              <collab-user
                v-if="flight.user"
                :user="flight.user"
                :showLeaveInfo="false"
              />
            </v-flex>
          </v-layout>
          <v-layout class="row-flight-time">
            <v-flex xs5 class="from flight-detail-time">
              {{ flight.fromTime }}
            </v-flex>
            <v-flex xs2 class="connector flight-detail-inner"></v-flex>
            <v-flex xs5 class="to flight-detail-time">
              {{ flight.toTime }}
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs5 class="from flight-detail-place">
              {{ flight.fromAirport }}
              <span v-if="flight.fromTerminal !== ''" class="flight-terminal">
                {{ flight.fromTerminal }}
              </span>
            </v-flex>
            <v-flex xs2 class="connector flight-detail-inner"></v-flex>
            <v-flex xs5 class="to flight-detail-place">
              {{ flight.toAirport }}
              <span v-if="flight.toTerminal !== ''" class="flight-terminal">
                {{ flight.toTerminal }}
              </span>
            </v-flex>
          </v-layout>
          <v-layout row wrap md6 xs12 class="row-airline-detail">
            <v-flex xs12 class="flight-detail">
              {{ flight.flightNo }}
            </v-flex>
            <v-flex xs6 class="flight-airline">
              {{ flight.airline }}
            </v-flex>
            <v-flex v-if="flight.ticketNum" xs6 class="flight-ticket-num">
              <v-tooltip bottom>
                <span
                  slot="activator"
                  @click="copyToClipboard(flight.ticketNum)"
                  >{{ flight.ticketNum }}</span
                >
                <span> Click to copy ticket number! </span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-flex>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import FlightOperationBar from "@/components/flight/OperationBar.vue";
import CollabUser from "@/components/collab/CollabUser.vue";

export default {
  name: "FlightBox",
  components: {
    FlightOperationBar,
    CollabUser,
  },
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
  methods: {
    trigger(action) {
      this.$emit("trigger", action, this.flight);
    },
  },
};
</script>

<style lang="scss" scoped>
.flight-box {
  margin: 0.5rem;
  padding: 0.5rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9)
  );
}
.flight-date {
  text-align: left;
  font-size: 1.3rem;
}
.row-airline-detail {
  text-align: left;
}
.flight-airline {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}
.flight-detail-place,
.flight-detail {
  font-size: 1.3rem;
}
.flight-terminal {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
}
.flight-detail-time {
  font-size: 1.9rem;
}
.flight-ticket-num {
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
  }
}
.collab-user {
  float: left;
}
.flight-box-wrapper {
  max-width: 400px;
  display: block;
}
</style>
<style>
.info-text-name {
  font-weight: bold;
}
</style>
