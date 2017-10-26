import { connect } from 'react-redux'
import { viewRecipes, viewRecipesSuccess, viewRecipesFailure, fetchRecipes } from '../actions';
import RecipeList from '../components/recipe-list';


const mapStateToProps = (state) => {
  return { 
    recipeList: state.recipeList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => {
      dispatch(fetchRecipes()).then((response) => {
            !response.error ? dispatch(viewRecipesSuccess(response.payload.data)) : dispatch(viewRecipesFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
