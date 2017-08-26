import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';

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
