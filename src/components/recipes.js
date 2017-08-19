import React from 'react';

import RecipeList from './recipe-list';
import RecipeDetails from './recipe-details';
import RecipeForm  from './recipe-form';
import RecipeDelete from './recipe-delete';
import RecipeEdit from './recipe-edit';
import RecipeAdd from './recipe-add';
import RecipeSearch from './recipe-search';

export default class Recipes extends React.Component {
  render(){
    return (
      <div className="container">
        <h2>Recipes</h2>
        <RecipeForm />
      </div>
    );
  }

        
}

    