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

export const EDIT_RECIPE = 'EDIT_RECIPE';
export const editRecipe = (recipe) => ({
  type: EDIT_RECIPE,
  recipe  
});

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const deleteRecipe = (recipe) => ({
  type: DELETE_RECIPE,
  recipe  
});


