import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {recipeDetails, deleteRecipe} from '../actions'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'

class RecipeDetails extends Component {
  // componentWillMount() {
  //   this.props.dispatch(recipeDetails());
  // }

  render() {
    
    return (
      <div className="container">
        <img src="https://api.adorable.io/avatars/64/alice%40thinkful.com" alt="Recipe Image" height="200" width="200"/>
        <h3 className="list-group-item-heading">Recipe Name{this.props.recipe.name}</h3>
        <h2 className="list-group-item">{this.props.recipe.description}</h2>
        <h2 className="list-group-item">{this.props.recipe.course}</h2>
        <h2 className="list-group-item">{this.props.recipe.cuisine}</h2>
        <h2 className="list-group-item">{this.props.recipe.ingredients}</h2>
        <h2 className="list-group-item">{this.props.recipe.cookingsteps}</h2>
        <h2 className="list-group-item">{this.props.recipe.servings}</h2>
        <h3 className="delete-button" key={this.props.recipe._id} 
          onClick = {() => this.props.deleteRecipe(this.props.recipe._id)}>
            <Link to={`/recipe-delete`}>
              Delete Recipe
            </Link>
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipeReducer.recipe
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({deleteRecipe: deleteRecipe},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetails);



