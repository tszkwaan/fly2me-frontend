<template>
    <v-card>
        <v-toolbar class="transparent">
            <v-toolbar-title>
                <router-link :to="{name: 'CalendarPage'}">
                    <img id="logo" src="/img/logo.png" alt="Fly2me logo" />
                </router-link>
            </v-toolbar-title>
            
            <ul class='main-nav d-inline'>
                <li>
                    <router-link :to="{name: 'FlightsPage'}">
                        <v-btn dark class="nav-btn">Flights</v-btn>
                    </router-link>
                </li>
            </ul>

            <v-spacer />

            <v-btn v-if="!session.isLoggedIn" dark @click="toggleLoginDialog">
                Login
            </v-btn>
            <v-menu v-else offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark v-bind="attrs" v-on="on">
                        <div class="menu__content__name row">
                            <div>
                                <img :src="session.imageUrl" alt="user icon" />
                            </div>
                            <div class="username d-none d-sm-flex">
                                {{ session.username }}
                            </div>
                        </div>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Session from '@/model/session.ts';
import CollabUser from '@/components/collab/CollabUser.vue';

import { mapState } from 'vuex';

export default Vue.extend({
    name: 'Navbar',
    components: {
        CollabUser,
    },
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
            this.$store.commit(
                'setSession',
                new Session('', '', false, -1, ''),
            );
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

    img {
        width: 50px;
        border-radius: 50%;
    }

    .username {
        align-items: center;
        margin-left: 5px;
    }
}
.theme--dark.v-btn.v-btn--has-bg {
    background: transparent;
    box-shadow: unset;
}
.main-nav {
    list-style: none;
    
    a {
        text-decoration: none;
    }
}
.nav-btn {
    color: #fff;
}
</style>
