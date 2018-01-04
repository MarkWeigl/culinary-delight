import {
  FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE, FETCH_RECIPE, 
  FETCH_RECIPE_SUCCESS, EDIT_RECIPE_SUCCESS, DELETE_RECIPE_SUCCESS
} from '../actions/recipe.js';

const initialState = {
  recipeList: {
    recipes: [], 
    error: null,
    loading: false
  },
  recipe: {
    id: "",
    name: "",
    description: "",
    course: "",
    cuisine: "",
    ingredients: "",
    steps: "",
    servings: "",
    error: null,
    loading: false
  }
};

export const recipeReducer = (state=initialState, action) => {
  let error;
  switch(action.type) {

    case FETCH_RECIPES:
      return Object.assign({},state,{recipeList: {recipes:[], error: null, loading: true} }); 
    case FETCH_RECIPES_SUCCESS:
      return Object.assign({},state,{recipeList: {recipes: action.recipes, error:null, loading: false} });
    case FETCH_RECIPES_FAILURE:
      error = action.payload || {message: action.payload.message};
      return Object.assign({},state,{recipeList: {recipes: [], error: error, loading: false} });
    case FETCH_RECIPE:
      return Object.assign({},state,{recipe: {error: null, loading: true} }); 
    case FETCH_RECIPE_SUCCESS:
      return Object.assign({},state,{recipe: action.recipe}); 
    case EDIT_RECIPE_SUCCESS:
      return Object.assign({},state,{recipe: action.recipe}); 
    case DELETE_RECIPE_SUCCESS:
      return Object.assign({},state,{recipe: {
              id: "",
              name: "",
              description: "",
              course: "",
              cuisine: "",
              ingredients: "",
              steps: "",
              servings: "",
              error: null,
              loading: false
            }
    });     
    default: 
      return state; 
  }
};
