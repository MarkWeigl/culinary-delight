import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './menu.css';
import Recipes from './recipes';
import RecipeForm from './recipe-form';
import RecipeEdit from './recipe-edit';
import RecipeList from './recipe-list';
import RecipeDetails from './recipe-details';

export default function Menu(props) {
  return (
    <Router>
      <div className="menuBar">
        <ul className="menuList">
          <li className="menuItem">
            <Link to={`/recipe-list`}>
              Recipes
            </Link>
          </li>
          <li className="menuItem">
            <Link to={`/add-recipe`}>
              Add Recipe
            </Link>
          </li>
          <li className="menuItem">
            <Link to={`/recipe-edit`}>
              Edit Recipe
            </Link>
          </li>
        </ul>
        <div>
          <Route exact path="/recipe-list" component={RecipeList} />
          <Route exact path="/add-recipe" component={RecipeForm} />
          <Route exact path="/recipe-edit" component={RecipeEdit} />
          <Route exact path="/recipe-details" component={RecipeDetails} />
        
        </div>

      </div>
    </Router>
  )
}

