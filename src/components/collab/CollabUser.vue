<template>
    <div class="collab-user">
        <img :src="user.image_url" alt="user icon" :class="`${size}`" />
        <div v-if="showName">
            <div class="info-text-name">
                {{ user.name }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'collab-user',
    props: {
        user: {
            type: Object,
            required: true,
        },
        showName: {
            type: Boolean,
            required: false,
            default: true,
        },
        size: {
            type: String,
            required: false,
            default: 'middle',
        },
        namePosition: {
            type: String,
            default: 'right',
        },
    },
    computed: {},
});
</script>

<style scoped lang="scss">
.collab-user {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }

    img {
        border-radius: 50%;
        width: 100%;

        &.small {
            width: 34px;
        }
    }
}

.info-text-name {
    text-align: left;
    margin-left: 5px;
    font-size: 12px;
}
</style>
