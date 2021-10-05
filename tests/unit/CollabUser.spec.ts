import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CollabUser from '@/components/collab/CollabUser.vue';

describe('CollabUser.vue', () => {
    it('renders user icon when passed', () => {
        const user = {
            color: 'red',
            name: 'tszkwaan',
        };
        const wrapper = shallowMount(CollabUser, {
            propsData: { user },
        });
        expect(wrapper.findAll('img').length).to.equal(1);
    });
});
