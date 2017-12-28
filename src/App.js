import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RecipeForm from './components/recipe-form';
import RecipeEdit from './components/recipe-edit';
import RecipeList from './components/recipe-list';
import RecipeDetails from './components/recipe-details';
import RegistrationPage from './components/registration-page';
import Splash from './components/splash';
import './App.css';
import Menu from './components/menu';
import {connect} from 'react-redux';
export default class App extends Component {
  
  render () {
    return (
      <div>
        <Menu/>
        <h1 className="title">Culinary Delight</h1>
        <div>
          <Route exact path="/" component={Splash} />
          <Route exact path="/recipe-list" component={RecipeList} />
          <Route exact path="/add-recipe" component={RecipeForm} />
          <Route exact path="/recipe-edit" component={RecipeEdit} />
          <Route exact path="/recipe-details" component={RecipeDetails} />
          <Route exact path="/register" component={RegistrationPage} />        
        </div>
      </div>
    )
  }
}

