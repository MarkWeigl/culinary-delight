import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../actions';
import {Button} from 'react-bootstrap';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';

export class RecipeForm extends Component {
  addRecipe(e) {
    e.preventDefault();
    const recipe = {};
    recipe.title = this.FieldText.value;
    this.props.dispatch(addRecipe(recipe));
  }

  render() {
    return (
      <form onSubmit={e => addRecipe(e)}>            
    
            <Field 
                name="name"
                type="text" 
                component={Input}
                label="Name"
                validate={[required, nonEmpty]}        
            />
            <Field 
                name="description"
                type="textarea" 
                component={textarea}
                label="description"
                validate={[required, nonEmpty]}   
            />
            <Field 
                name="course"
                type="select" 
                component={select}
                label="course"
                validate={[required, nonEmpty]}   
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option> 
            />
            <Field 
                name="cuisine"
                type="select" 
                component={select}
                label="cuisine"
                validate={[required, nonEmpty]}   
                <option value="breakfast">American</option>
                <option value="lunch">Asian</option>
                <option value="dinner">European</option>
                <option value="dessert">Mexican</option>
                <option value="breakfast">South American</option>
                <option value="lunch">Middle Eastern</option>
            />
            <Field 
                name="ingredients"
                type="textarea" 
                component={textarea}
                label="ingredients"
                validate={[required, nonEmpty]}   
            />
            <Field 
                name="steps"
                type="textarea" 
                component={textarea}
                label="steps"
                validate={[required, nonEmpty]}   
            />
            <Field 
                name="servings"
                type="number" 
                component={number}
                label="servings"
                validate={[required, nonEmpty]}   
            />
            <Field 
                name="servingsize"
                type="text" 
                component={Input}
                label="servingsize"
                validate={[required, nonEmpty]}   
            />
        
        <Button bsStyle="primary" type="submit" className="add-recipe-Button">Add a Recipe</Button>
        <Button className="edit-btn" onClick={this.RecipeForm}>Close</Button>
        <Button type="submit" className="btn btn-primary">Submit</Button>
      </form>
    )
  }
};
export default connect()(RecipeForm);