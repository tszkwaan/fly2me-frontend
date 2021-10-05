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
        <div v-else class="no-content headline">No flights yet, add now!</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FlightBox from '@/components/flight/FlightBox.vue'
import { FlightInterface } from '@/model/flight.ts'

export default Vue.extend({
    name: 'FlightList',
    components: {
        FlightBox,
    },
    props: {
        flights: {
            type: Array,
        },
    },
    methods: {
        trigger(action: string, flight: FlightInterface): void {
            this.$emit('trigger', action, flight)
        },
    },
})
</script>

<style scoped lang="scss">
#flight-list {
    padding-top: 3rem;
    height: 70vh;
    overflow-y: auto;
}

.no-content {
    color: white;
    margin-top: 50px;
}
</style>
