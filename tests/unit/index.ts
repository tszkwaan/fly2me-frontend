import Vue from 'vue';
import App from './App.vue';
import router from '../../src/router';
import store from '../../src/store';

import Gravatar from 'vue-gravatar';
import VueSession from 'vue-session';
import vuetify from '../../src/plugins/vuetify';
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false;

Vue.use(VueSession);
Vue.component('v-gravatar', Gravatar);

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
