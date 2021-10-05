import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import CollabUser from '@/components/collab/CollabUser.vue';

describe('CollabUser.vue', () => {

    let collabUser;

    beforeEach(() => {
        collabUser = shallowMount(CollabUser, {
            propsData: {
                size: 'small',
                user: {
                    name: 'tszkwaan',
                    color: 'red'
                }
            }
        });
    });

    it('returns size for small avatar', () => {
        expect(collabUser.vm.avatarSize).to.equal('2rem');
    });

});
