import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../actions';

export class RecipeForm extends Component {
  addRecipe(e) {
    e.preventDefault();
    const recipe = {};
    recipe.title = this.title.value;
    this.props.dispatch(addRecipe(recipe));
  }

  render() {
    return (
      <form onSubmit={e => addRecipe(e)}>
        <input type="text" id="title" ref={input => this.title = input}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
};
export default connect()(RecipeForm);