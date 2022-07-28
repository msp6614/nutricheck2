import { mount } from "@vue/test-utils";
import IngredientsForm from '../components/Ingredients_Form/IngredientsForm';
describe('In IngredientsForm component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(IngredientsForm);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    it('Has a button which is Add', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
});