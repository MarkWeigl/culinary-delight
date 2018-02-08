import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import RecipeDelete from './recipe-delete';
import store from '../store';

describe('<RecipeDelete />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <RecipeDelete />
            </Provider>);
    });

});