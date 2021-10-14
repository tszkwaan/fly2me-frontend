<template>
    <v-layout row class="flight-operation-bar">
        <share-button @trigger="trigger" />
        <edit-button @trigger="trigger" />
        <delete-button @trigger="trigger" />
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import ShareButton from '@/components/common/button/ShareButton.vue';
import EditButton from '@/components/common/button/EditButton.vue';
import DeleteButton from '@/components/common/button/DeleteButton.vue';

export default Vue.extend({
    name: 'OperationBar',
    components: {
        EditButton,
        DeleteButton,
        ShareButton,
    },
    methods: {
        trigger(action: string): void {
            console.log('in op bar onclick')
            this.$emit('trigger', action);
        },
    },
});
</script>

<style type="scss">
.flight-operation-bar {
    flex-direction: column;
    float: right;
}
</style>
<style type="scss">
.flight-box .flight-operation-bar {
    display: none;
}
.flight-box:hover .flight-operation-bar {
    display: block;
}
@media (max-width: 509px) {
    .flight-box .flight-operation-bar {
        display: block;
    }
}
</style>
