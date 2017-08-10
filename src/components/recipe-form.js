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
     {/*}   <input type="text" id="title" ref={input => this.title = input}/>  */}
                <div className="new-recipe-header">
                    <p className="m-font">Add a Recipe</p>
                    <p className="close-icon" onClick={this.RecipeForm}></p>
                </div>
                <hr />
                <div className="new-recipe-body">
                    <div>
                        <p>Recipe</p>
                        <input type="text"
                            placeholder="Recipe Name"
                            value={this.state.inputText }
                            onChange={(event) => this.setState({ inputText: event.target.value })}
                        />
                    </div>
                </div>
                    <div className="new-recipe-footer">
                        <button type="submit" className="add-recipe-button">Add a Recipe</button>
                        <button className="edit-btn" onClick={this.RecipeForm}>Close</button>
                    </div>
                </form>
    <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
};
export default connect()(RecipeForm);