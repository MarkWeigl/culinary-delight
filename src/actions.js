import axios from 'axios';
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

export const viewRecipe = (recipe) => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:8080/recipes',
    data: recipe
  });
  return {
    type: VIEW_RECIPE,
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
export const deleteRecipe = (recipe) => {
  const request = axios({
    method: 'delete',
    url: 'http://localhost:8080/recipes',
    data: recipe
  });
  return {
    type: DELETE_RECIPE,
    payload: request
  }
};

