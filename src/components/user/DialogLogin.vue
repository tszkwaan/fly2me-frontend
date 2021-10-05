<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" max-width="400px">
            <v-card id="card-login">
                <v-card-title class="title"> Login </v-card-title>
                <v-card-text id="card-login-form">
                    <login-form ref="loginForm" @closeDialog="toggleDialog" />
                </v-card-text>
                <v-card-actions>
                    <v-flex xs12>
                        <v-btn
                            block
                            color="primary"
                            @click.native="onLoginButtonClick"
                        >
                            Login
                        </v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginForm from '@/components/user/FormLogin.vue';

export default Vue.extend({
    name: 'LoginDialog',
    components: {
        LoginForm,
    },
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        toggleDialog(): void {
            this.dialog = !this.dialog;
        },
        onLoginButtonClick(): void {
            this.$refs.loginForm.login();
        },
    },
});
</script>

<style scoped>
#card-login-form {
    padding: 25px 30px;
}
.v-card__actions {
    padding-bottom: 15px;
}
</style>
