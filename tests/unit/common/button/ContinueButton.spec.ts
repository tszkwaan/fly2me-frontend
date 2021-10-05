import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ContinueButton from '@/components/common/button/ContinueButton.vue';

describe('ContinueButton.vue', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(ContinueButton);
    });

    it('trigger onClick() should emit continue event', () => {
        wrapper.vm.onClick();
        const emitted = wrapper.emitted().continue[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(0);
    });

});
