import {API_BASE_URL} from '../config.js';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const RECIPE_DETAILS = 'RECIPE_DETAILS';
export const RESET_RECIPES = 'RESET_RECIPES';

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe, user) => (dispatch, getState) => {
  recipe.user = user;
  const authToken = getState().auth.authToken;    
  fetch(`${API_BASE_URL}/recipes`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`      
    },
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
  .then(res => {
    dispatch(fetchRecipes(user));
  });
  return {
    type: ADD_RECIPE,
    data: recipe
  }
};

export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const editRecipeSuccess = recipe => ({
    type: EDIT_RECIPE_SUCCESS,
    recipe  
})

export const editRecipe = (recipe) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;      
  fetch(`${API_BASE_URL}/recipes/${recipe._id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
    },    
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
  .then(res => dispatch(editRecipeSuccess(res)))
  .catch(err => {
    console.log(err);
  });
};


export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const deleteRecipeSuccess = () => ({
    type: DELETE_RECIPE_SUCCESS, 
})

export const deleteRecipe = (id, user) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;      
  fetch(`${API_BASE_URL}/recipes/${id}`, {
    method: 'DELETE',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }    
  })
  .then(res => dispatch(fetchRecipes(user)))
  .then(res => dispatch(deleteRecipeSuccess(res)))
  .catch(err => {
    console.log(err);
  });
};

export const fetchRecipes = (user) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;  
  fetch(`${API_BASE_URL}/recipes/${user}`, {
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
  fetch(`${API_BASE_URL}/recipes/details/${id}`, {
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

