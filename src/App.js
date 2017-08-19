import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import Recipes from './components/recipes';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Menu />
          <div className="App-header">
            <h1>Culinary Delight</h1>
          </div>
        </div>
    );
  }
}

export default App;
