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
                            editableFlight.flightNum =
                                editableFlight.flightNum.toUpperCase()
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
                            editableFlight.ticketNum =
                                editableFlight.ticketNum.toUpperCase()
                        "
                    />

                    <v-layout align-center justify-end row>
                        <v-flex xs6 md3 class="operation-button">
                            <save-button
                                :fab="false"
                                :icon="false"
                                :primary="false"
                                @save="triggerSave"
                            />
                        </v-flex>

                        <v-flex xs6 md3 class="operation-button">
                            <continue-button
                                class="button-action"
                                @continue="incrementStep"
                            />
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card>
                    <v-layout container row>
                        <v-flex xs12 class="body-2 label-journey"
                            >Departure</v-flex
                        >
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

                        <v-flex xs12 class="body-2 label-journey"
                            >Arrival</v-flex
                        >
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
                        <v-flex xs6 md3 class="operation-button">
                            <save-button
                                :fab="false"
                                :icon="false"
                                :primary="false"
                                @save="triggerSave"
                            />
                        </v-flex>

                        <v-flex xs6 md3 class="operation-button">
                            <continue-button
                                class="button-action"
                                @continue="incrementStep"
                            />
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card>
                    <v-text-field
                        v-model="editableFlight.hotel"
                        label="Hotel name"
                    />

                    <v-layout align-center justify-end row>
                        <save-button
                            :fab="false"
                            :icon="false"
                            @save="triggerSave"
                        />
                    </v-layout>
                </v-card>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script lang="ts">
import Vue from 'vue';
import SaveButton from '@/components/common/button/SaveButton.vue';
import ContinueButton from '@/components/common/button/ContinueButton.vue';

import Flight from '@/model/flight.ts';
import FlightApi from '@/api/flight.ts';
import UserApi from '@/api/user.ts';
import { mapState } from 'vuex';
import { cloneDeep } from 'lodash';
import { FlightInterface } from '../../model/flight';

export default Vue.extend({
    name: 'FlightForm',
    components: {
        SaveButton,
        ContinueButton,
    },
    props: {
        formType: {
            type: String,
            default: 'create',
        },
        formMode: {
            type: String,
            default: 'create',
        },
        originalFlight: {
            type: Object,
        },
    },
    data(outerThis = this) {
        return {
            flight: {},
            editableFlight: {
                ...cloneDeep(this.originalFlight),
                fromDateFormatted: outerThis.formatDate(
                    this.originalFlight.fromDate
                ),
            },
            flights: [],
            users: [],
            airports: [],
            terminals: [],
            step: 1,
        };
    },
    computed: {
        ...mapState(['session']),
    },
    methods: {
        formatDate(date: string): string {
            if (!date) {
                return '';
            }
            const [year, month, day] = date.split('-');
            return `${month}/${day}/${year}`;
        },
        setFieldsFromFlightRecord(existingFlight: FlightInterface): void {
            this.editableFlight.fromAirport = existingFlight.fromAirport;
            this.editableFlight.toAirport = existingFlight.toAirport;
            this.editableFlight.fromTerminal = existingFlight.fromTerminal;
            this.editableFlight.toTerminal = existingFlight.toTerminal;
            this.editableFlight.fromTime = existingFlight.fromTime;
            this.editableFlight.toTime = existingFlight.toTime;
            this.editableFlight.airline = existingFlight.airline;
        },
        saveFlight(): void {
            if (this.formMode === 'create') {
                FlightApi.createFlight(this.editableFlight)
                    .then((res) => {
                        this.$emit(
                            'notifyEvent',
                            'create',
                            'success',
                            res.data
                        );
                    })
                    .catch((err) => {
                        this.$emit('notifyEvent', 'create', 'fail');
                    });
            } else {
                FlightApi.updateFlight(this.editableFlight)
                    .then((res) => {
                        this.$emit(
                            'notifyEvent',
                            'update',
                            'success',
                            res.data
                        );
                    })
                    .catch((err) => {
                        this.$emit('notifyEvent', 'update', 'fail');
                    });
            }
        },
        incrementStep(): void {
            this.step++;
        },
        triggerSave(): void {
            this.saveFlight();
        },
        resetStep(): void {
            this.step = 1;
        },
    },
    watch: {
        'editableFlight.fromDate'() {
            this.editableFlight.fromDateFormatted = this.formatDate(
                this.editableFlight.fromDate
            );
        },
        'editableFlight.flightNum'() {
            // const _this = this;
            // let existingFlight = this.flights.find(
            //     (flight) => flight.flightNum === _this.editableFlight.flightNum
            // );
            // if (existingFlight) {
                // _this.setFieldsFromFlightRecord(existingFlight);
            // }
        },
        originalFlight: {
            deep: true,
            handler(value, prevVal) {
                if (value.id === 0) {
                    value.userId = this.users[0].id;
                }
                this.flight = cloneDeep(value);
                this.editableFlight = cloneDeep(this.flight);
                this.resetStep();
            },
        },
    },
});
</script>

<style lang="scss" scoped>
.label-journey {
    text-align: left;
}
.operation-button {
    padding: 5px;
}
.v-stepper__wrapper > .v-card {
    padding: 10px;
}
</style>
