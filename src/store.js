import {createStore, combineReducers} from 'redux'; 
import {recipeReducer} from './reducer';
import { reducer as formReducer } from 'redux-form';

export default createStore(
  combineReducers({
    recipeReducer, 
 //   form: formReducer
  })
);