import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AddButton from '@/components/common/button/AddButton.vue';

describe('AddButton.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(AddButton);
    });

    it('trigger onClick() should emit add event', () => {
        wrapper.vm.onClick();
        const emitted = wrapper.emitted().add[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(0);
    });
});
