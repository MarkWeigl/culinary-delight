import React, {Component} from 'react';
import { Link } from 'react-router';

class RecipeList extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderRecipes(recipes) {
    return recipes.map((recipe) => {
      return (
        <li className="list-group-item" key={recipe._id}>
          <Link style={{color:'black'}} to={"recipes/" + recipe._id}>
            <h3 className="list-group-item-heading">{recipe.title}</h3>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { recipes, loading, error } = this.props.RecipeList;

    if(loading) {
      return <div className="container"><h1>Recipes</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Recipes</h1>
        <ul className="list-group">
          {this.renderRecipes(recipes)}
        </ul>
      </div>
    );
  }
}

export default RecipeList;