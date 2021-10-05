import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ConfirmDeleteDialog from '@/components/common/dialog/ConfirmDeleteDialog.vue';
import { isEqual } from 'lodash';

import mockFlight from '../../mock/flight.json';

describe('ConfirmDeleteDialog.vue', () => {

    let wrapper;
    const componentObj = {
        test: true
    }

    beforeEach(() => {
        wrapper = shallowMount(ConfirmDeleteDialog, {
            propsData: {
                componentType: 'flight'
            },
            data() {
                return {
                    isShow: true,
                    component: componentObj
                }
            }
        });
    });

    it('trigger confirmDelete() should emit trigger remove event', () => {
        wrapper.vm.confirmDelete();
        const emitted = wrapper.emitted().trigger[0];
        expect(Array.isArray(emitted)).to.equal(true);
        expect(emitted.length).to.equal(2);
        expect(emitted[0]).to.equal('remove');
        expect(isEqual(emitted[1], componentObj)).to.equal(true);
    });

    it('trigger confirmDelete() should set isShow to false', () => {
        wrapper.vm.confirmDelete();
        expect(wrapper.vm.isShow).to.equal(false);
    });

    it('trigger toggleDialog() should update component & isShow', () => {
        wrapper.vm.toggleDialog(mockFlight);
        expect(isEqual(wrapper.vm.component, mockFlight)).to.equal(true);
        expect(wrapper.vm.isShow).to.equal(false);
    });

});
