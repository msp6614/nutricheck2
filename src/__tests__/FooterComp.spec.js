import { mount } from "@vue/test-utils";
import FooterComp from '../components/FooterComp.vue';

describe('In FooterComp Component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(FooterComp);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    
});