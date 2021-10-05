<template>
    <div class="collab-user" :style="{ color: user.color }">
        <v-avatar size="20px">
            <v-gravatar :email="user.name" default-img="identicon" />
        </v-avatar>
        <div>
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
        showLeaveInfo: {
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
    computed: {
        avatarSize(): string {
            return this.size === 'small' ? '2rem' : '3rem';
        },
    },
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
}

.info-text-name {
    text-align: left;
    margin-left: 5px;
    font-size: 12px;
}
</style>
