import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import RecipeDetails from './recipe-details';
import store from '../store';

describe('<RecipeDetails />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <RecipeDetails />
            </Provider>);
    });

});