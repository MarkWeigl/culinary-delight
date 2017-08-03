import React, {Component} from 'react';

class RecipeView extends Component {
  constructor(props) {
    super(props);
  }

  deleteRecipe() {
    this.props._deleteRecipe(this.props.id);
  }

  editRecipe() {
    this.props._editRecipe(this.props.id);
  }

  render() {
   return; 
  }
};

export default RecipeView;