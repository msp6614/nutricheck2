import { mount } from '@vue/test-utils'
import CardComp from '../components/CardComp.vue'
describe('In CardComp component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(CardComp);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    it('Has a button which is Green Salad', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
    it('Has a button which is Dosa', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
    it('Has a button which is Coffee', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
});