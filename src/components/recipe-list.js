import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {fetchRecipes} from '../actions'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'

class RecipeList extends Component {
  componentWillMount() {
    console.log('fetching');
    this.props.dispatch(fetchRecipes());
  }

  renderRecipes(recipes) {
    return recipes.map((recipe) => {
      return (
        <li className="list-group-item" key={recipe._id}>
          <Link style={{color:'black'}} to={"recipes/" + recipe._id}>
            <h3 className="list-group-item-heading">{recipe.name}</h3>
          </Link>
        </li>
      );
    });
  }

  render() {
    
    return (
      <div className="container">
        <h1>Recipes</h1>
        <ul className="list-group">
          {this.renderRecipes(this.props.recipes)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipeList.recipes
});

export default connect(mapStateToProps)(RecipeList);



