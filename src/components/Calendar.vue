<template>
    <calendar-view
        :show-date="showDate"
        :show-times="true"
        :items="formattedFlights"
        class="theme-default"
    >
        <template
            slot="item"
            slot-scope="{ value, top }"
            :style="`top: ${top};`"
        >
            <event :event="value"></event>
        </template>
        <calendar-view-header
            slot="header"
            slot-scope="t"
            :header-props="t.headerProps"
            @input="setShowDate"
        />
    </calendar-view>
</template>
<script lang="ts">
import Vue from 'vue';
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar';
import Flight from '@/model/flight.ts';
import 'vue-simple-calendar/static/css/default.css';
import { FlightInterface } from '../model/flight';
import Event from '@/components/calendar/Event.vue';

export default Vue.extend({
    name: 'calendar',
    props: {
        flights: [],
    },
    data: function () {
        return {
            showDate: new Date(),
        };
    },
    components: {
        CalendarView,
        CalendarViewHeader,
        Event,
    },
    methods: {
        setShowDate(date) {
            this.showDate = date;
        },
        getFormattedItems(flights: FlightInterface[]) {
            return flights.map((flight: FlightInterface) => ({
                id: flight.id,
                startDate: `${flight.fromDate}`,
                endDate: `${flight.toDate}`,
                title: `${flight.fromAirport} -> ${flight.toAirport}`,
                url: JSON.stringify(flight), // a hack to pass the flight object to custom event slot
            }));
        },
    },
    computed: {
        formattedFlights() {
            return this.getFormattedItems(this.flights);
        },
    },
});
</script>
<style lang="scss">
$primary-font-color: rgba(0, 0, 0, 0.87);

.cv-day {
    background: white;
}

.cv-wrapper {
    color: $primary-font-color;
}
</style>
