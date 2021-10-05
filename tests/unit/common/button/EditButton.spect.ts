import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import EditButton from '@/components/common/button/EditButton.vue';

describe('EditButton.vue', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(EditButton);
    });

    it('trigger onClick() should emit edit event', () => {
        wrapper.vm.onClick();
        const emitted = wrapper.emitted().edit[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(0);
    });

});
