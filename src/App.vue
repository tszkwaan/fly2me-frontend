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
        <v-footer padless app bottom absolute>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} —
                <span class="author">Tsz Kwan</span>
            </v-col>
        </v-footer>
        <login-dialog
          ref="loginDialog"/>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/common/Navbar.vue';
import LoginDialog from '@/components/user/DialogLogin'

export default Vue.extend({
    name: 'App',
    components: {
        Navbar,
        LoginDialog
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
.v-footer {
    margin-top: 50px;
    padding-left: 1rem;
    background: none;
    color: white;

    .author {
        font-style: italic;
    }
}
</style>
