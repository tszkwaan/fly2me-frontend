<template>
    <div
        :class="event.classes"
        class="cv-day cv-item"
        :style="`background: white;`"
    >
        <v-container>
            <v-row>
                <v-col cols="2">
                    <collab-user
                        :user="user"
                        :show-name="false"
                        size="small"
                    ></collab-user>
                </v-col>
                <v-col cols="10">
                    <div>{{ fromTime }} - {{ toTime }}</div>
                    <div>{{ fromAirport }} -> {{ toAirport }}</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import CollabUser from '@/components/collab/CollabUser.vue';

export default Vue.extend({
    name: 'event',
    components: {
        CollabUser,
    },
    props: {
        event: {},
    },
    computed: {
        flight() {
            return JSON.parse(this.event.originalItem.url);
        },
        user() {
            return this.flight.user;
        },
        fromTime() {
            return this.flight.fromTime;
        },
        toTime() {
            return this.flight.toTime;
        },
        fromAirport() {
            return this.flight.fromAirport;
        },
        toAirport() {
            return this.flight.toAirport;
        },
    },
});
</script>

<style scoped lang="scss">
.cv-item {
    top: 30px;
}
.col {
    padding: 0;
}

.col-2 {
    display: flex;
    align-items: center;
}
</style>
