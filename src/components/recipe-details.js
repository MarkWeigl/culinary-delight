import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {deleteRecipe} from '../actions/recipe.js'
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
          <h2 className="text-center">Recipe Details</h2>
          <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1" id="content"> 
            <h3 className="list-group-item-heading">Recipe Name: {this.props.recipe.name}</h3>
            <h4 className="list-group-item">Description: {this.props.recipe.description}</h4>
            <h4 className="list-group-item">Course: {this.props.recipe.course}</h4>
            <h4 className="list-group-item">Cuisine: {this.props.recipe.cuisine}</h4>
            <h4 className="list-group-item">Ingredients: {this.props.recipe.ingredients}</h4>
            <h4 className="list-group-item">Steps: {this.props.recipe.steps}</h4>
            <h4 className="list-group-item">Servings: {this.props.recipe.servings}</h4>
            <br></br>
            <Link to={`/recipe-edit`}>
              <button className="btn btn-submit">Edit</button>
            </Link>
            &nbsp; &nbsp;
            <Link to={`/recipe-list`}>
              <button className="btn btn-danger" onClick = {() => this.props.deleteRecipe(this.props.recipe._id, this.props.user)}>Delete</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipeReducer.recipe,
  user: state.auth.currentUser.username
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({deleteRecipe: deleteRecipe}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetails);



