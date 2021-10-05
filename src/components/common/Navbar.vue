<template>
    <v-card>
        <v-toolbar class="transparent">
            <v-toolbar-title>
                <img id="logo" src="/img/logo.png" alt="Fly2me logo" />
            </v-toolbar-title>
            <v-spacer />

            <v-btn v-if="!session.isLoggedIn" dark @click="toggleLoginDialog">
                Login
            </v-btn>
            <v-menu v-else offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark v-bind="attrs" v-on="on">
                        <div class="menu__content__name">
                            <v-avatar size="40px">
                                <v-gravatar
                                    :email="session.username"
                                    default-img="identicon"
                                />
                            </v-avatar>
                            {{ session.username }}
                        </div>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!--                     
            <template v-slot:activator="{ on, attrs }">
                <v-toolbar-items
                    v-if="!session.isLoggedIn"
                    
                >
                    <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="toggleLoginDialog"
                    >
                        Login
                    </v-btn>
                </v-toolbar-items>
            </template> -->
            <!-- <v-toolbar-items v-if="session.isLoggedIn">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn dark v-bind="attrs" v-on="on">
                            <div class="menu__content__name">
                                <v-avatar size="40px">
                                    <v-gravatar
                                        :email="session.username"
                                        default-img="identicon"
                                    />
                                </v-avatar>
                                {{ session.username }}
                            </div>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="logout">
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items> -->
        </v-toolbar>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Session from '@/model/session.ts';
import { mapState } from 'vuex';

export default Vue.extend({
    name: 'Navbar',
    components: {},
    data: () => ({
        drawer: true,
    }),
    computed: {
        ...mapState(['session']),
    },
    methods: {
        toggleSidebar(): void {
            this.$emit('toggleSidebar');
        },
        toggleLoginDialog(): void {
            this.$emit('toggleLoginDialog');
        },
        logout(): void {
            this.$store.commit('setSession', new Session('', '', false, -1));
            this.$session.destroy();
            this.$router.push('/');
        },
    },
});
</script>

<style lang="scss" scoped>
#logo {
    margin-top: 8px;
    height: 3rem;
}
.menu__content__name {
    color: white;
    text-transform: uppercase;
}
.theme--dark.v-btn.v-btn--has-bg {
    background: transparent;
    box-shadow: unset;
}
</style>
