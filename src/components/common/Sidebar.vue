<template>
    <v-navigation-drawer v-model="showSidebar" clipped fixed app>
        <v-list dense>
            <v-list-item>
                <v-list-item-action>
                    <v-icon>airplanemode_active</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Flights</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Sidebar',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {
        toggleSidebar(): void {
            this.showSidebar = !this.showSidebar
        },
    },
})
</script>

<style></style>
