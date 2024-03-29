<template>
    <v-layout row wrap justify-center>
        <v-flex md10 sm10 xs12 class="flight-box-wrapper">
            <div class="flight-box">
                <v-flex xs12 class="flight-basic">
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
                                size="small"
                            />
                        </v-flex>
                    </v-layout>
                    <v-layout class="row-flight-time">
                        <v-flex xs5 class="from flight-detail-time">
                            {{ flight.fromTime }}
                        </v-flex>
                        <v-flex
                            xs2
                            class="connector flight-detail-inner"
                        ></v-flex>
                        <v-flex xs5 class="to flight-detail-time">
                            {{ flight.toTime }}
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs5 class="from flight-detail-place">
                            {{ flight.fromAirport }}
                            <span
                                v-if="flight.fromTerminal !== ''"
                                class="flight-terminal"
                            >
                                {{ flight.fromTerminal }}
                            </span>
                        </v-flex>
                        <v-flex
                            xs2
                            class="connector flight-detail-inner"
                        ></v-flex>
                        <v-flex xs5 class="to flight-detail-place">
                            {{ flight.toAirport }}
                            <span
                                v-if="flight.toTerminal !== ''"
                                class="flight-terminal"
                            >
                                {{ flight.toTerminal }}
                            </span>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap md6 xs12 class="row-airline-detail">
                        <v-flex xs12 class="flight-detail">
                            {{ flight.flightNum }}
                        </v-flex>
                        <v-flex xs6 class="flight-airline">
                            {{ flight.airline }}
                        </v-flex>
                        <v-flex
                            v-if="flight.ticketNum"
                            xs6
                            class="flight-ticket-num"
                        >
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <span
                                        v-bind="attrs" v-on="on"
                                        @click="
                                            copyToClipboard(flight.ticketNum, flight.id)
                                        "
                                        >{{ flight.ticketNum }}</span
                                    >
                                </template>
                                <span :id="`copy-text-${flight.id}`"> Click to copy!</span>
                            </v-tooltip>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </div>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import FlightOperationBar from '@/components/flight/OperationBar.vue';
import CollabUser from '@/components/collab/CollabUser.vue';

export default Vue.extend({
    name: 'FlightBox',
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
        trigger(action: string): void {
            this.$emit('trigger', action, this.flight);
        },
        copyToClipboard(ticketNum: string, flightId: number): void {
            navigator.clipboard.writeText(ticketNum)
            .then(() => {
                document.getElementById(`copy-text-${flightId}`)
                console.log('Async: Copying to clipboard was successful!');
            })
            .catch((err) => {
                this.$emit('showSnackbar', 'Failed to copy to clipboard! :(');
                console.error(new Error(err));
            });
        }
    },
});
</script>

<style lang="scss" scoped>
$detail-font-color: rgba(0, 0, 0, 0.6);
$detail-font-size-xl: 1.9rem;
$detail-font-size-lg: 1.3rem;
$detail-font-size-md: 0.9rem;
$detail-font-size-sm: 0.8rem;

.flight {
    &-box {
        margin: 0.5rem;
        padding: 20px;
        background: rgba(255, 255, 255, 0.9);
    }

    &-basic {
        padding: 0.5rem;
    }

    &-date {
        text-align: left;
        font-size: $detail-font-size-lg;
    }

    &-airline {
        color: $detail-font-color;
        font-size: $detail-font-size-md;
    }

    &-detail-place,
    &-detail {
        font-size: $detail-font-size-lg;
    }

    &-terminal {
        font-size: $detail-font-size-sm;
        color: $detail-font-color;
    }

    &-detail-time {
        font-size: $detail-font-size-xl;
    }

    &-ticket-num {
        text-align: right;
        color: $detail-font-color;
        font-size: $detail-font-size-md;
        &:hover {
            cursor: pointer;
        }
    }

    &-user {
        justify-content: flex-end;
    }

    &-box-wrapper {
        max-width: 500px;
        display: block;
    }
}

.row {
    &-airline-detail {
        margin-top: 1.5rem;
        text-align: left;
    }

    &-flight-time {
        margin-top: 1.5rem;
    }

    &-flight-details {
        margin-bottom: 1rem;
    }
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
</style>
<style>
.info-text-name {
    font-weight: bold;
}

.collab-user {
    float: left;
}
</style>
