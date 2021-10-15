<template>
    <v-layout wrap>
        <v-flex xs12>
            <v-text-field v-model="user.username" label="Username" required />
        </v-flex>
        <v-flex xs12>
            <v-text-field
                v-model="user.password"
                label="Password"
                type="password"
                required
            />
        </v-flex>
        <snackbar ref="snackbar" />
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Snackbar from '@/components/common/Snackbar.vue';
import User from '@/model/user.ts';
import UserApi from '@/api/user.ts';

import { mapMutations } from 'vuex';

export default Vue.extend({
    name: 'LoginForm',
    components: {
        Snackbar,
    },
    data() {
        return {
            user: {}
        };
    },
    methods: {
        login(): void {
            UserApi.login()
                .then((res) => {
                    this.$session.start();
                    this.$session.set('jwt', res.data.token);
                    const session = {
                        token: res.data.token,
                        username: res.data.name,
                        isLoggedIn: true,
                        userId: res.data.id,
                        imageUrl: res.data.image_url,
                    };
                    this.$store.commit('setSession', session);
                    this.$emit('closeDialog', false);
                    this.$router.push('/flights');
                })
                .catch((err) => {
                    this.$refs.snackbar.display('Login failed');
                    console.error(new Error(err));
                });
        },
        ...mapMutations['session'],
    },
});
</script>

<style scoped></style>
