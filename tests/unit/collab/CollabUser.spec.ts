import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CollabUser from '@/components/collab/CollabUser.vue';

describe('CollabUser.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(CollabUser, {
            propsData: {
                size: 'small',
                user: {
                    name: 'tszkwaan',
                    color: 'red',
                },
            },
        });
    });

    it('returns size for small avatar', () => {
        expect(wrapper.vm.avatarSize).to.equal('2rem');
    });
});
