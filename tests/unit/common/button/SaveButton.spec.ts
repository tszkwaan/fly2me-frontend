import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SaveButton from '@/components/common/button/SaveButton.vue';

describe('SaveButton.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(SaveButton);
    });

    it('trigger onClick() should emit save event', () => {
        wrapper.vm.onClick();
        const emitted = wrapper.emitted().save[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(0);
    });
});
