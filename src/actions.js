import axios from 'axios';
import {API_BASE_URL} from './config.js';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const RESET_RECIPES = 'RESET_RECIPES';

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe) => {
  fetch(`${API_BASE_URL}/recipes`,
    {method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  }).then(res => {

  });
  return {
    type: ADD_RECIPE,
    data: recipe
  }
};

export const fetchRecipes = () => dispatch => {
    fetch(`${API_BASE_URL}/recipes`)
      .then(res => res.json())

      .then(recipes => {
        console.log(recipes);
        dispatch(fetchRecipesSuccess(recipes))
      }
    );
};

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes  
})

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

