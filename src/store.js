import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import {recipeReducer} from './reducer';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    recipeReducer, 
    form: formReducer
  })

export default createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));

