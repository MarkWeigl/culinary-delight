import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import RecipeForm from './recipe-form';
import store from '../store';

describe('<RecipeForm />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <RecipeForm />
            </Provider>);
    });

    it('Should fire the onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Provider store={store}><RecipeForm onSubmit={callback} /></Provider>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });

});
