import axios from 'axios';
import {API_BASE_URL} from '../config.js';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const RECIPE_DETAILS = 'RECIPE_DETAILS';
export const RESET_RECIPES = 'RESET_RECIPES';

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;    
  fetch(`${API_BASE_URL}/recipes`,
    {method:'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`      
    },
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
  .then(res => {
    dispatch(fetchRecipes());
  });
  return {
    type: ADD_RECIPE,
    data: recipe
  }
};

export const fetchRecipes = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;  
  fetch(`${API_BASE_URL}/recipes`, {
      method: 'GET',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(recipes => {
      dispatch(fetchRecipesSuccess(recipes))
    }
  );
};

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes  
})

export const recipeDetails = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;    
  fetch(`${API_BASE_URL}/recipes/${id}`, {
    method: 'GET',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }    
  })
    .then(res => res.json())
    .then(recipe => {
      dispatch(fetchRecipeSuccess(recipe))
    }
  );
};

export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const fetchRecipeSuccess = recipe => ({
  type: FETCH_RECIPE_SUCCESS,
  recipe  
})

export const EDIT_RECIPE = 'EDIT_RECIPE';
export const editRecipe = (recipe) => (getState) => {
  const authToken = getState().auth.authToken;      
  fetch(`${API_BASE_URL}/recipes/${recipe._id}`, {
    method: 'PUT',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    },    
    data: recipe
  });
  return {
    type: EDIT_RECIPE,
    recipe
  }
};

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const deleteRecipe = (id) => (getState) => {
  const authToken = getState().auth.authToken;      
  const request = axios({
    method: 'delete',
    url: 'http://localhost:8080/recipes/'+id,
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }    
  });
  return {
    type: DELETE_RECIPE,
    payload: request
  }
};
