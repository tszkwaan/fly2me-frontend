<template>
    <v-layout id="calendar-container" row wrap justify-center>
        <v-flex class="col-md-8 col-sm-12 col-xs-12">
            <calendar :flights="displayFlights" />
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Calendar from '@/components/Calendar.vue';
import Flight from '@/model/flight.ts';
import FlightApi from '@/api/flight.ts';
import User from '@/model/flight.ts';
import UserApi from '@/api/user.ts';
import { FlightInterface } from '../model/flight';

export default Vue.extend({
    name: 'calendar-page',
    components: {
        Calendar,
    },
    data() {
        return {
            flights: [],
            users: [],
            selectedUsers: [],
        };
    },
    created() {
        this.getFlights();
        this.getUsers();
    },
    computed: {
        displayFlights(): FlightInterface[] {
            return this.flights;
        },
    },
    methods: {
        getFlights(): void {
            FlightApi.getAllFlightList()
                .then((res) => {
                    this.flights = res.data.flights;
                })
                .catch((err) => {
                    this.$emit('showSnackbar', 'Failed to get flights! :(');
                    console.error(new Error(err));
                });
        },
        getUsers(): void {
            UserApi.getAllUserList()
                .then((res) => {
                    this.users = res.data;
                })
                .catch((err) => {
                    this.$emit('showSnackbar', 'Failed to get users! :(');
                    console.error(new Error(err));
                });
        },
    },
});
</script>

<style></style>
