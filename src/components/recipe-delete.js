import React, {Component} from 'react';
import ROOT_URL from '../config.js';

class DeleteRecipe extends Component {
}  

export function DeleteRecipe(_id) {
  const request = axios.delete(`${ROOT_URL}/recipes/${_id}`);

  return {
    type: DELETE_RECIPE,
  };
}

export default DeleteRecipe;
