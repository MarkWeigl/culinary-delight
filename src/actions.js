import axios from 'axios';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const RESET_RECIPES = 'RESET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe) => {
  const request = axios({
    method: 'post',
    url: 'http://localhost:8080/recipes',
    data: recipe
  });
  return {
    type: ADD_RECIPE,
    payload: request
  }
};

export const fetchRecipes = () => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:8080/recipes',
  });
  return {
    type: FETCH_RECIPES,
    payload: request
  }
};

export const EDIT_RECIPE = 'EDIT_RECIPE';
export const editRecipe = (recipe) => {
  const request = axios({
    method: 'put',
    url: 'http://localhost:8080/recipes',
    data: recipe
  });
  return {
    type: EDIT_RECIPE,
    payload: request
  }
};

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const deleteRecipe = (id) => {
  const request = axios({
    method: 'delete',
    url: 'http://localhost:8080/recipes/'+id,
  });
  return {
    type: DELETE_RECIPE,
    payload: request
  }
};

export const VIEW_RECIPES_SUCCESS = 'VIEW_RECIPES_SUCCESS';
export function ViewRecipesSuccess(activeRecipe) {
  return {
    type: VIEW_RECIPES_SUCCESS,
    payload: activeRecipe
  };
}

export const VIEW_RECIPES_FAILURE = 'VIEW_RECIPES_FAILURE';
export function ViewRecipesFailure(error) {
  return {
    type: VIEW_RECIPES_FAILURE,
    payload: error
  };
}