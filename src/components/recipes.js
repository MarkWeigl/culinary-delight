import React from 'react';
import RecipeForm  from './recipe-form';

export default class Recipes extends React.Component {
  render(){
    return (
      <div className="container">
        <h1>Recipes</h1>
        <RecipeForm />
      </div>
    );
  }       
}
   