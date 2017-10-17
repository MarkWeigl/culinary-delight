import {
  ADD_RECIPE, VIEW_RECIPE, EDIT_RECIPE, DELETE_RECIPE, DELETE_RECIPE_SUCCESS, DELETE_RECIPE_FAILURE, 
  RESET_DELETED_RECIPE, FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE
} from './actions';
import data from './mockdata.js';

const initialState = {
  recipeList: {
    recipes: [], 
    error: null,
    loading: false
  },
  recipe: {
    name: "",
    description: "",
    course: "",
    cuisine: "",
    ingredients: "",
    steps: "",
    servings: "",
    servingsize: ""
  }
};

export const recipeReducer = (state=initialState, action) => {
  let error;
  switch(action.type) {

    case FETCH_RECIPES:
      return Object.assign({},state,{recipeList: {recipes:[], error: null, loading: true} }); 
    case FETCH_RECIPES_SUCCESS:
      return Object.assign({},state,{recipeList: {recipes: action.payload, error:null, loading: false} });
    case FETCH_RECIPES_FAILURE:
      error = action.payload || {message: action.payload.message};
      return Object.assign({},state,{recipeList: {recipes: [], error: error, loading: false} });
    default: 
      return state; 
  }
};
