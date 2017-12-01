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
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1" id="content"> 
            <h3 className="list-group-item-heading">Recipe Name: {this.props.recipe.name}</h3>
            <h2 className="list-group-item">Description: {this.props.recipe.description}</h2>
            <h2 className="list-group-item">Course: {this.props.recipe.course}</h2>
            <h2 className="list-group-item">Cuisine: {this.props.recipe.cuisine}</h2>
            <h2 className="list-group-item">Ingredients: {this.props.recipe.ingredients}</h2>
            <h2 className="list-group-item">Cooking Steps: {this.props.recipe.steps}</h2>
            <h2 className="list-group-item">Servings: {this.props.recipe.servings}</h2>
            <h3 className="edit-button">  
                <Link to={`/recipe-edit`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
            </h3>
            <h3 className="delete-button" 
              onClick = {() => this.props.deleteRecipe(this.props.recipe._id)}>
                <Link to={`/recipe-delete`}>
                  <button className="btn btn-danger">Delete</button>
                </Link>
            </h3>
          </div>
        </div>
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



