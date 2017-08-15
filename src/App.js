import React, { Component } from 'react';
import './App.css';
import Recipes from './components/recipes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Culinary Delight</h1>
        </div>
        <Recipes/>
      </div>
    );
  }
}

export default App;
