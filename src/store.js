import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import {recipeReducer} from './reducers/recipeReducer';
import protectedDataReducer from './reducers/protected-data';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    recipeReducer, 
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
  })

export default createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));

