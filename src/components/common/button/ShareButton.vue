<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="onClick">
                <v-icon> whatsapp </v-icon>
            </v-btn>
        </template>
        <span> Share in Whatsapp </span>
    </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ShareButton',
    methods: {
        onClick(): void {
            this.$emit('trigger', 'share');
        },
    },
});
</script>
