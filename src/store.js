import {recipeReducer} from './reducer';
import {createStore, combineReducers} from 'redux'; 
import { reducer as formReducer } from 'redux-form';
const reducers = {
  recipeReducer, 
  form: formReducer
};
const reducer = combineReducers(reducers);
export default createStore(reducer);