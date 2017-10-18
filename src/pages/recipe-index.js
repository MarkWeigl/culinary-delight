import React, { Component } from 'react';
import RecipeList from '../containers/recipe-list-container';

class RecipeIndex extends Component {
  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}


export default RecipeIndex;