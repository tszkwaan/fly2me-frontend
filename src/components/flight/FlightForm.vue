<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step editable :complete="step > 1" step="1"
        >Basics</v-stepper-step
      >

      <v-divider />

      <v-stepper-step editable :complete="step > 2" step="2">
        Flight detail
        <small>Optional</small>
      </v-stepper-step>

      <v-divider />

      <v-stepper-step editable step="3">
        Accomodation
        <small>Optional</small>
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card>
          <v-menu
            v-model="editableFlight.fromDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="editableFlight.fromDateFormatted"
                label="Departure date"
                append-icon="event"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="editableFlight.fromDate"
              @input="editableFlight.fromDateMenu = false"
              no-title
            ></v-date-picker>
          </v-menu>

          <v-text-field
            label="Flight"
            v-model="editableFlight.flightNum"
            append-icon="airplanemode_active"
            @input="
              editableFlight.flightNum = editableFlight.flightNum.toUpperCase()
            "
          />

          <v-text-field
            label="Airline (optional)"
            v-model="editableFlight.airline"
          />

          <v-text-field
            label="Ticket number (optional)"
            v-model="editableFlight.ticketNum"
            @input="
              editableFlight.ticketNum = editableFlight.ticketNum.toUpperCase()
            "
          />

          <v-layout align-center justify-end row>
            <v-flex xs6 md3 class="column-button">
              <save-button
                :fab="false"
                :icon="false"
                :primary="false"
                @click="triggerSave"
              />
            </v-flex>

            <v-flex xs6 md3 class="column-button">
              <button-continue class="button-action" @click="incrementStep" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card>
          <v-layout container row>
            <v-flex xs12 class="body-2">Departure</v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                label="Airport"
                height="20"
                v-model="editableFlight.fromAirport"
                @input="
                  editableFlight.fromAirport =
                    editableFlight.fromAirport.toUpperCase()
                "
              />
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                label="Terminal"
                height="20"
                v-model="editableFlight.fromTerminal"
                @input="
                  editableFlight.fromTerminal =
                    editableFlight.fromTerminal.toUpperCase()
                "
              />
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                class="auto-fill"
                v-model="editableFlight.fromTime"
                label="Time"
                mask="time"
                height="20"
                persistent-hint
                return-masked-value
              />
            </v-flex>

            <v-flex xs12 class="body-2">Arrival</v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                label="Airport"
                height="20"
                v-model="editableFlight.toAirport"
                @input="
                  editableFlight.toAirport =
                    editableFlight.toAirport.toUpperCase()
                "
              />
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                label="Terminal"
                height="20"
                v-model="editableFlight.toTerminal"
                @input="
                  editableFlight.toTerminal =
                    editableFlight.toTerminal.toUpperCase()
                "
              />
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                class="auto-fill"
                v-model="editableFlight.toTime"
                label="Time"
                height="20"
                mask="time"
                persistent-hint
                return-masked-value
              />
            </v-flex>
          </v-layout>
          <v-layout align-center justify-end row>
            <v-flex xs6 md3 class="column-button">
              <save-button
                :fab="false"
                :icon="false"
                :primary="false"
                @click="triggerSave"
              />
            </v-flex>

            <v-flex xs6 md3 class="column-button">
              <button-continue class="button-action" @click="incrementStep" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <v-text-field v-model="editableFlight.hotel" label="Hotel name" />

          <v-layout align-center justify-end row>
            <save-button :fab="false" :icon="false" @click="triggerSave" />
          </v-layout>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import SaveButton from "@/components/common/button/SaveButton.vue";
import ButtonContinue from "@/components/common/button/ButtonContinue.vue";

import Flight from "@/model/flight.ts";
import FlightApi from "@/api/flight.ts";
import UserApi from "@/api/user.ts";
import { mapState } from "vuex";
import { cloneDeep } from "lodash";

export default {
  name: "FlightForm",
  components: {
    SaveButton,
    ButtonContinue,
  },
  props: {
    formType: {
      type: String,
      default: "create",
    },
    formMode: {
      type: String,
      default: "create",
    },
    originalFlight: {
      type: Object,
      deafult: new Flight()
    },
  },
  data() {
    return {
      flight: new Flight(),
      editableFlight: {
          ...cloneDeep(this.originalFlight),
          fromDateFormatted: this.formatDate(
            this.originalFlight.fromDate
        )
      },
      flights: [],
      users: [],
      airports: [],
      terminals: [],
      step: 1,
    };
  },
  computed: {
    ...mapState(["session"]),
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    setFieldsFromFlightRecord(existingFlight) {
      this.editableFlight.fromAirport = existingFlight.fromAirport;
      this.editableFlight.toAirport = existingFlight.toAirport;
      this.editableFlight.fromTerminal = existingFlight.fromTerminal;
      this.editableFlight.toTerminal = existingFlight.toTerminal;
      this.editableFlight.fromTime = existingFlight.fromTime;
      this.editableFlight.toTime = existingFlight.toTime;
      this.editableFlight.airline = existingFlight.airline;
    },
    async saveFlight() {
      if (this.formMode === "create") {
        await FlightApi.createFlight(this.editableFlight)
          .then((res) => {
            this.$emit("notifyEvent", "create", "success", res.data);
          })
          .catch((err) => {
            this.$emit("notifyEvent", "create", "fail");
          });
      } else {
        await FlightApi.updateFlight(this.editableFlight)
          .then((res) => {
            this.$emit("notifyEvent", "update", "success", res.data);
          })
          .catch((err) => {
            this.$emit("notifyEvent", "update", "fail");
          });
      }
    },
    incrementStep() {
      this.step++;
    },
    triggerSave() {
      this.saveFlight();
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    resetStep() {
      this.step = 1;
    }
  },
  watch: {
    "editableFlight.fromDate"() {
      this.editableFlight.fromDateFormatted = this.formatDate(
        this.editableFlight.fromDate
      );
    },
    "editableFlight.flightNum"() {
      const _this = this;
      let existingFlight = this.flights.find(
        (flight) => flight.flightNum === _this.editableFlight.flightNum
      );
      if (existingFlight) {
        // _this.setFieldsFromFlightRecord(existingFlight);
      }
    },
    originalFlight: {
      deep: true,
      handler: function(value, prevVal) {
          console.log('originalFlight watcher::')
          console.log(value)
          console.log(prevVal)
        if (value.id === 0) {
            value.userId = this.users[0].id;
        }
        this.flight = cloneDeep(value);
        this.editableFlight = cloneDeep(this.flight);
        this.resetStep();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  padding-right: 10px;
}
.form-container {
  align-items: baseline;
}
#form-section-header-accomodation {
  margin-top: 2rem;
  margin-bottom: 0;
}
.form-section-subheader,
.form-input-airport {
  &.sm {
    margin-left: 45px;
  }
}
.subheading {
  text-align: left;
}
.v-stepper {
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9)
  );
}
.button-action {
  float: right;
}
.v-stepper__step {
  padding: 0 24px;
}
.layout.row.wrap > .flex {
  padding: 8px;
}
.body-2 {
  text-align: left;
}
.column-button {
  padding: 5px;
}
.v-stepper__wrapper > .v-card {
  padding: 10px;
}
</style>
