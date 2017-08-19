export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  recipe  
});

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
