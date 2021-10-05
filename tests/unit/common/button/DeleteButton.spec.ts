import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import DeleteButton from '@/components/common/button/DeleteButton.vue';

describe('DeleteButton.vue', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(DeleteButton);
    });

    it('trigger onClick() should emit confirmRemove event', () => {
        wrapper.vm.onClick();
        const emitted = wrapper.emitted().trigger[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(1);
        expect(emitted[0]).to.equal('confirmRemove');
    });

});
