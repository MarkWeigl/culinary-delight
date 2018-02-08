import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import RecipeList from './recipe-list';
import store from '../store';

describe('<RecipeList />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
            <RecipeList />
            </Provider>);
    });

});