<template>
    <div id="flight-list-area">
        <flight-list :flights="flights" @trigger="trigger" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import FlightList from '@/components/flight/FlightList.vue';

import { FlightInterface } from '@/model/flight.ts';

import FlightApi from '@/api/flight.ts';
import UserApi from '@/api/user.ts';

export default Vue.extend({
    name: 'FlightListArea',
    components: {
        FlightList,
    },
    props: {
        listType: {
            type: String,
            default: 'future',
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
        getFlights(): void {
            FlightApi.getMyFlightList(this.listType)
                .then((res) => {
                    this.flights = res.data.flights;
                })
                .catch((err) => {
                    this.$emit('showSnackbar', 'Failed to get flights! :(');
                    console.error(new Error(err));
                });
        },
        trigger(action: string, flight: FlightInterface): void {
            this.$emit('trigger', action, flight);
        },
        removeFlight(flight: FlightInterface): void {
            FlightApi.deleteFlight(flight.id)
                .then((res) => {
                    this.flights = this.flights.filter(
                        (flightItem) => flightItem.id !== flight.id,
                    );
                    this.$emit('showSnackbar', 'Flight deleted!');
                })
                .catch((err) => {
                    this.$emit('showSnackbar', 'Failed to delete flight! :(');
                });
        },
        addFlightToList(flight: FlightInterface): void {
            this.flights.push(flight);
        },
        sortFlightListByFromDate(): void {
            this.flights.sort((a, b) => {
                return +new Date(a.fromDate) - +new Date(b.fromDate);
            });
        },
        setFlights(event: 'create' | 'update', flight: FlightInterface) {
            switch (event) {
                case 'create':
                    this.addFlightToList(flight);
                    this.sortFlightListByFromDate();
                    break;
                case 'update':
                    const index = this.flights.findIndex(
                        (flightItem) => flightItem.id === flight.id,
                    );
                    if (index > -1) {
                        Vue.set(this.flights, index, flight);
                    }
                    break;
            }
        },
    },
    watch: {
        listType(): void {
            this.getFlights();
        },
    },
});
</script>

<style scoped>
#flight-list-area {
    text-align: center;
}
@media (max-width: 509px) {
    #flight-list-area {
        padding: 10px;
    }
}
</style>
