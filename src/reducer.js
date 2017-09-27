import {
  ADD_RECIPE, VIEW_RECIPE_, EDIT_RECIPE, DELETE_RECIPE
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

export const recipeReducer = (state=initialState, action) => {

  return state; 
}