import {
  ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE
} from './actions';
import data from './mockdata.js';

const initialState = {
  recipe: {
    name: "chicken",
    description: "chicken recipe",
    course: "",
    cuisine: "",
    ingredients: "",
    steps: "",
    servings: "",
    servingsize: ""
  }
};

const reducers = {
  routing,
  form: formReducer
};

export const recipeReducer = (state=initialState, action) => {

  return state; 
}