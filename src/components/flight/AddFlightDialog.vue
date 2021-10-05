<template>
    <v-dialog v-model="isDisplay" content-class="form-dialog" width="500">
        <v-card>
            <v-card-title class="title">
                {{ formMode === 'create' ? 'Add' : 'Edit' }} a flight
            </v-card-title>
            <v-card-text id="card-flight-form">
                <flight-form
                    ref="flightForm"
                    :originalFlight="originalFlight"
                    :formMode="formMode"
                    @notifyEvent="notifyEvent"
                />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import FlightForm from '@/components/flight/FlightForm.vue';
import SaveButton from '@/components/common/button/SaveButton.vue';
import Flight from '@/model/flight.ts';

import { cloneDeep } from 'lodash';
import { FlightInterface } from '../../model/flight';

export default Vue.extend({
    name: 'AddFlightDialog',
    components: {
        FlightForm,
        SaveButton,
    },
    props: {},
    data() {
        return {
            isDisplay: false,
            originalFlight: {},
            formMode: 'create',
        };
    },
    methods: {
        saveFlight(): void {
            this.$refs.flightForm.saveFlight();
        },
        showDialog(flight: FlightInterface, mode: string): void {
            if (mode) {
                this.formMode = mode;
            }
            this.originalFlight = cloneDeep(flight);
            this.isDisplay = true;
        },
        resetFormMode(): void {
            this.formMode = 'create';
        },
        resetDialog(): void {
            this.resetFormMode();
            this.originalFlight = {};
        },
        notifyEvent(event, result, flight): void {
            this.isDisplay = false;
            this.$emit('notifyEvent', event, result, flight);
        },
        addFlight(): void {
            this.resetFormMode();
            this.isDisplay = true;
        },
    },
    watch: {
        isDisplay(): void {
            if (!this.isDisplay) {
                this.resetDialog();
            }
        },
    },
});
</script>

<style scoped lang="scss">
.operation-buttons {
    text-align: right;
}
</style>
