import React from 'react';

import Splash from './recipe-splash';
import RecipeSplash from './recipe-splash';
import RecipeForm  from './recipe-form';
import RecipeDelete from './recipe-delete';
import RecipeEdit from './recipe-edit';
import RecipeView from './recipe-view';
import RecipeSearch from './recipe-search';

export default class Recipes extends React.Component {
  render(){
    return (
      <div>
        <h1>Recipes go here</h1>
        <RecipeForm />
      </div>
    );
  }

        
}

    