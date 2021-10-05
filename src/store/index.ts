import Vue from 'vue'
import Vuex from 'vuex'
import session from '@/store/session.ts'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        session,
    },
    plugins: [createPersistedState()],
})
