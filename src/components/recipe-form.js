import React, {Component} from 'react';
import {addRecipe} from '../actions';
import {Button} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';

export class RecipeForm extends Component {
  addRecipe(values) {
      this.props.dispatch(addRecipe(values));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.addRecipe(values))}>            
        <div>
            <label>Name</label>
            <div>
                <Field 
                    name="name"
                    type="text" 
                    component="input"        
                />
            </div>
        </div>
        <div>
            <label>Description</label>
            <div>
                <Field 
                    name="description"
                    type="textarea" 
                    component="textarea" 
                />
            </div>
        </div>
        <div>
            <label>Course</label>
            <div>
                <Field 
                    name="course"
                    component="select">  
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option> 
                </Field>
            </div>
        </div>
         <div>
            <label>Cuisine</label>
            <div> 
                <Field 
                    name="cuisine"
                    component="select">  
                    <option value="breakfast">American</option>
                    <option value="lunch">Asian</option>
                    <option value="dinner">European</option>
                    <option value="dessert">Mexican</option>
                    <option value="breakfast">South American</option>
                    <option value="lunch">Middle Eastern</option>
                </Field>
            </div>
        </div>
        <div>
            <label>Steps</label>
            <div>
                <Field 
                    name="steps"
                    type="textarea" 
                    component="textarea" 
                />
            </div>
        </div>
        <div>
            <label>Servings</label>
            <div>
                <Field 
                    name="servings"
                    type="number" 
                    component="input" 
                />
            </div>
        </div>
        <div>
            <label>Serving Size</label>
            <div>        
                <Field 
                    name="servingsize"
                    type="text" 
                    component="Input"  
                />
            </div>
        </div>        
        <Button type="submit" className="btn btn-primary">Submit</Button>
      </form>
    )
  }
};
export default reduxForm({
    form: 'recipeForm'
})(RecipeForm)