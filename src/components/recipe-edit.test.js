import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import RecipeEdit from './recipe-edit';
import store from '../store';

describe('<RecipeEdit />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <RecipeEdit />
            </Provider>);
    });

    it('Should fire the onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Provider store={store}><RecipeEdit onSubmit={callback} /></Provider>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });

});