import { mount } from "@vue/test-utils";
import HomePage from '../components/HomePage.vue';

describe('In HomePage Component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(HomePage);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('Has a button which is LocateUs', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
    it('Has a button which is Help', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
});