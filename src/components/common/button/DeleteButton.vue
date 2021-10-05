<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="onClick">
                <v-icon> delete </v-icon>
            </v-btn>
        </template>
        <span> Delete flight </span>
    </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'DeleteButton',
    props: {
    },
    methods: {
        onClick(): void {
            this.$emit('trigger', 'confirmRemove');
        },
    },
});
</script>

<style scoped></style>
