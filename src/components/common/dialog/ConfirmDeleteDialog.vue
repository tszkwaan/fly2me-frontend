<template>
    <v-dialog v-model="isShow" max-width="290">
        <v-card>
            <v-card-text>
                Are you sure to delete the {{ componentType }}?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="toggleDialog"> Cancel </v-btn>
                <v-btn color="#B71C1C" dark @click="confirmDelete">
                    Confirm
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ConfirmDeleteDialog',
    props: {
        componentType: {
            type: String,
            default: 'component',
        },
    },
    data() {
        return {
            isShow: false,
            component: undefined,
        };
    },
    methods: {
        confirmDelete(): void {
            this.isShow = false;
            this.$emit('trigger', 'remove', this.component);
        },
        toggleDialog(component: object): void {
            this.component = component;
            this.isShow = !this.isShow;
        },
    },
});
</script>

<style></style>
