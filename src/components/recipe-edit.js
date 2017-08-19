import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

class RecipeEdit extends Component {
  editRecipe (e){}
  
  render() {
    return (
      <form onSubmit={e => this.editRecipe(e)}>            
        <div className="form-group">
            <label htmlFor="name">Recipe</label>
            <input type="text" className="form-control" id="name"
                value={this.props.recipe.name}
                ref={input => this.inputText = input }
            />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea rows="4" className="form-control" id="description"
                placeholder="Recipe Description"
                ref={input => this.inputText = input }></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="course">Course</label>
            <select className="form-control" id="course">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option> 
              ref={input => this.inputText = input } 
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="cuisine">Cuisine</label>
            <select className="form-control" id="cuisine">
              <option value="breakfast">American</option>
              <option value="lunch">Asian</option>
              <option value="dinner">European</option>
              <option value="dessert">Mexican</option>
              <option value="breakfast">South American</option>
              <option value="lunch">Middle Eastern</option>
              ref={input => this.inputText = input }
              </select>
        </div>
          <label htmlFor="ingredients">Ingredients</label>
          <input type="text" className="form-control" id="ingredients"
            placeholder="Recipe Ingredients"
            ref={input => this.inputText = input }
          />
        <div className="form-group">
            <label htmlFor="steps">Cooking Steps</label>
            <textarea rows="4" className="form-control" id="steps"
                placeholder="Cooking Steps"
                ref={input => this.inputText = input }></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input type="number" min="1" className="form-control" id="servings"
                placeholder="Servings"
                ref={input => this.inputText = input }
            />
        </div>
        <div className="form-group">
            <label htmlFor="servingsize">Serving Size</label>
            <input type="text" className="form-control" id="servingsize"
                placeholder="Serving Size"
                ref={input => this.inputText = input }
            />
        </div>
        <Button bsStyle="primary" type="submit" className="add-recipe-Button">Add a Recipe</Button>
        <Button className="edit-btn" onClick={this.RecipeForm}>Close</Button>
        <Button type="submit" className="btn btn-primary">Submit</Button>
      </form>
    )
  }
}

const mapStatetoProps = state => ({
  recipe: state.recipe   
})
export default connect(mapStatetoProps)(RecipeEdit);
