import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../actions/recipe.js';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

export class RecipeForm extends Component {
  addRecipe(values) {
      this.props.dispatch(addRecipe(values, this.props.user));
      this.props.history.push("/recipe-list");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <h2 className="text-center">Add New Recipe</h2>
            <div className="col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1" id="content"> 
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
                            type="select"
                            component="select">  
                            <option value="" disabled defaultValue>Choose Course</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option> 
                        </Field>
                    </div>
                </div>
                 <div>
                    <br></br>
                    <label>Cuisine</label>
                    <div> 
                        <Field 
                            name="cuisine"
                            type="select"
                            component="select">  
                            <option value="" disabled defaultValue>Choose Cuisine</option>
                            <option value="American">American</option>
                            <option value="Asian">Asian</option>
                            <option value="European">European</option>
                            <option value="Mexican">Mexican</option>
                            <option value="South American">South American</option>
                            <option value="Middle Eastern">Middle Eastern</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <br></br>                
                    <label>Ingredients</label>
                    <div>
                        <Field 
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
                <br></br>   
                <Link to={`/recipe-list`}>    
                    <Button className="btn btn-default">Cancel</Button>
                </Link>  
                &nbsp; &nbsp;                                 
                <Button type="submit" className="btn btn-primary">Submit</Button>
              </form>
            </div>
        </div>
    </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.auth.currentUser.username
});

RecipeForm = reduxForm({
    form: 'recipeForm'
})(RecipeForm)

RecipeForm = connect(mapStateToProps)(RecipeForm);

export default RecipeForm;
