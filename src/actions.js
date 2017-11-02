import axios from 'axios';
import {API_BASE_URL} from './config.js';
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

export const fetchRecipes = () => dispatch => {
    fetch(`${API_BASE_URL}/recipes`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(recipes => {
        dispatch(FETCH_RECIPES_SUCCESS(recipes));
    });
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

