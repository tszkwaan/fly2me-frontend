import Vue from 'vue';
import Router from 'vue-router';
import FlightsPage from '@/views/FlightsPage.vue';
import CalendarPage from '@/views/CalendarPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'CalendarPage',
            component: CalendarPage,
        },
        {
            path: '/flights',
            name: 'FlightsPage',
            component: FlightsPage,
        },
    ],
});
