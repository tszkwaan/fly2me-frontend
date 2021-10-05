<template>
    <v-btn small class="primary" @click="onClick"> Continue </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ContinueButton',
    methods: {
        onClick(): void {
            this.$emit('continue');
        },
    },
});
</script>

<style scoped></style>
