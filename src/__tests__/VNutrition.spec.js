import { mount } from '@vue/test-utils'
import VNutrition from '../components/VNutrition.vue'
describe('In VNutrition component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(VNutrition);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    it('Has a button which is search', () => {
        expect(wrapper.find('k').exists()).toBe(true)
    });
});
