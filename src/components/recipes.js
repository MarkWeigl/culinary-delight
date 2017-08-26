import React from 'react';
import RecipeForm  from './recipe-form';

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

    