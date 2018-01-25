import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {fetchRecipes, recipeDetails} from '../actions/recipe.js'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'

class RecipeList extends Component {
  componentWillMount() {
    this.props.fetchRecipes(this.props.user);
  }

  renderRecipes(recipes) {
    return recipes.map((recipe) => {
      return (
        <li className="list-group-item" key={recipe._id} onClick = {() => this.props.recipeDetails(recipe._id)}>
          <Link style={{color:'black'}} to={"recipe-details/"}>
            <h4 className="list-group-item-heading">{recipe.name}</h4>
          </Link>
        </li>
      );
    });
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1"> 
            <h2 className="text-center">Recipes</h2>
            <ul className="list-group">
              {this.renderRecipes(this.props.recipes)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipeList.recipes,
  user: state.auth.currentUser.username
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators ({recipeDetails: recipeDetails, fetchRecipes: fetchRecipes},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);



