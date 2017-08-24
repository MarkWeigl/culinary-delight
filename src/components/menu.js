import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import './menu.css';
import Recipes from './recipes';
import RecipeForm from './recipe-form';

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
          <Route exact path="/recipe-list" component={Recipes} />
          <Route exact path="/add-recipe" component={RecipeForm} />
        
        </div>

      </div>
    </Router>
  )
}
