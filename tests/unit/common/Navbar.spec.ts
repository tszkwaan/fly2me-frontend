import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Navbar from '@/components/common/Navbar.vue';
import Vuex from 'vuex';
import { toHaveBeenCalledWith } from 'vue-jest';

const localVue = createLocalVue();
localVue.use(Vuex);

const sessionStore = {
    state: {
        username: '',
        userId: undefined,
        token: '',
        isLoggedIn: false,
    },
    mutations: {
        setSession(state, session) {
            state.username = session.username;
            state.token = session.token;
            state.isLoggedIn = session.isLoggedIn;
            state.userId = session.userId;
        },
    },
};

const store = new Vuex.Store({
    modules: {
        session: sessionStore,
    },
});

describe('Navbar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Navbar, {
            store,
            localVue,
        });
    });

    it('trigger toggleSidebar() should emit toggleSidebar event', () => {
        wrapper.vm.toggleSidebar();
        const emitted = wrapper.emitted().toggleSidebar[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(0);
    });

    it('trigger toggleLoginDialog() should emit toggleLoginDialog event', () => {
        wrapper.vm.toggleLoginDialog();
        const emitted = wrapper.emitted().toggleLoginDialog[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(0);
    });
});
