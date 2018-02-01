import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'; 
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<App/>);
});
