import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {editRecipe} from '../actions/recipe.js';

class RecipeEdit extends Component {
  editRecipe(values) {
    this.props.dispatch(editRecipe(values));
    this.props.history.push("/recipe-details");
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center">Edit Recipe</h2>
                <div className="col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1" id="content"> 
                      <form onSubmit={this.props.handleSubmit(values => this.editRecipe(values))}>              
                        <div>
                            <label>Name</label>
                            <div>
                                <Field 
                                    className="inputwidth"
                                    name="name"
                                    type="text" 
                                    component="Input"        
                                />
                            </div>
                        </div>
                        <div>
                            <label>Description</label>
                            <div>
                                <Field 
                                    className="inputwidth"
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
                            <br></br>
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
                            <br></br>
                            <label>Ingredients</label>
                            <div>    
                                <Field 
                                    className="inputwidth"
                                    name="ingredients"
                                    type="textarea" 
                                    component="textarea" 
                                />
                            </div>
                        </div>
                        <div>
                            <label>Steps</label>
                            <div>
                                <Field 
                                    className="inputwidth"
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
                                    className="inputwidth"
                                    name="servings"
                                    type="number" 
                                    component="Input" 
                                />
                            </div>
                        </div> 
                        <br></br>  
                        <Link to={`/recipe-list`}>    
                            <Button className="btn btn-default">Cancel</Button>
                        </Link>
                        &nbsp; &nbsp;
                        <Button className="btn btn-submit" type="submit" >Submit</Button>
                      </form>
                    </div>
                </div>
            </div>
        )
    }
};

RecipeEdit = reduxForm({
    form: 'recipeEdit'
})(RecipeEdit)
 
RecipeEdit = connect(
  state => ({
    initialValues: state.recipeReducer.recipe
  })            
)(RecipeEdit)

export default RecipeEdit;


