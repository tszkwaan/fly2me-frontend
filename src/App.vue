<template>
    <v-app id="app-container" light>
        <navbar
            @toggleSidebar="toggleSidebar"
            @toggleLoginDialog="toggleLoginDialog"
        />
        <v-main>
            <v-container fluid fill-height>
                <router-view />
            </v-container>
        </v-main>
        <login-dialog ref="loginDialog" />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/common/Navbar.vue';
import LoginDialog from '@/components/user/LoginDialog.vue';

export default Vue.extend({
    name: 'App',
    components: {
        Navbar,
        LoginDialog,
    },
    methods: {
        toggleSidebar(): void {
            this.$refs.sidebar.toggleSidebar();
        },
        toggleLoginDialog(): void {
            this.$refs.loginDialog.toggleDialog();
        },
    },
});
</script>

<style scoped lang="scss">
#app-container {
    background-image: url('/img/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    text-align: center;
}
.v-main {
    height: 85vh;
}
.v-footer {
    margin-top: 50px;
    padding-left: 1rem;
    background: none;
    color: white;

    .author {
        font-style: italic;
    }
}
@media(max-width: 509px) {
    #app-container {
        background-image: url('/img/bg_mobile.jpg');
    }
}
</style>
