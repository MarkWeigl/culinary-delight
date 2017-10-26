import {createStore, combineReducers} from 'redux'; 
import {recipeReducer} from './reducer';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise';

export default createStore(
  combineReducers({
    recipeReducer, 
    form: formReducer
  })
);