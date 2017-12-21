import axios from 'axios';
import {API_BASE_URL} from './config.js';
import {SubmissionError} from 'redux-form';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const RECIPE_DETAILS = 'RECIPE_DETAILS';
export const RESET_RECIPES = 'RESET_RECIPES';

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe) => dispatch => {
  fetch(`${API_BASE_URL}/recipes`,
    {method:'POST',
    headers: {
      'Content-Type': 'application/json'
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

export const fetchRecipes = () => dispatch => {
    fetch(`${API_BASE_URL}/recipes`)
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

export const recipeDetails = (id) => dispatch => {
    const route = `${API_BASE_URL}/recipes/${id}`;
    fetch(route)
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
export const editRecipe = (recipe) => {
  const request = axios({
    method: 'put',
    url: 'http://localhost:8080/recipes/'+recipe._id,
    data: recipe
  });
  return {
    type: EDIT_RECIPE,
    recipe
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
