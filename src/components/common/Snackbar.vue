<template>
    <v-snackbar v-model="showSnackbar" right top :timeout="5000">
        {{ text }}
    </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Snackbar',
    data() {
        return {
            showSnackbar: false,
            text: '',
        }
    },
    methods: {
        display(message: string): void {
            if (message) {
                this.showSnackbar = true
                this.text = message
            }
        },
    },
})
</script>

<style></style>
