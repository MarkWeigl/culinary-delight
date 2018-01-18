import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Menu extends React.Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }
    
  render() {

    let recipeMenu;

    if (this.props.loggedIn) {
      recipeMenu = (
        <ul className="menuList">
          <li className="menuItem">
            <Link to={`/recipe-list`}>
              Recipe List
            </Link>
          </li>
          <li className="menuItem">
            <Link to={`/add-recipe`}>
              Add Recipe
            </Link>
          </li>
          <li className="menuItem logOut" onClick={() => this.logOut()}>
            <Link to={`/`}>
              Log out
            </Link>
          </li>
        </ul>
      );
    } 

    return (
    // Only render the log out button if we are logged in
      <div className="menu">
        {recipeMenu}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Menu);
  


