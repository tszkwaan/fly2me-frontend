import Vue from 'vue'
import Router from 'vue-router'
import FlightsPage from '@/views/FlightsPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/flights',
            name: 'FlightsPage',
            component: FlightsPage,
        },
    ],
})
