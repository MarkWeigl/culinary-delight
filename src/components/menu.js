import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './menu.css';
import Recipes from './recipes';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Menu extends React.Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }
    
  render() {
    let logOutButton;

    if (this.props.loggedIn) {
      logOutButton = (
        <li className="menuItem logOut" onClick={() => this.logOut()}>Log out</li>
      );
    } 

    return (
    // Only render the log out button if we are logged in
      <div className="menu">
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
          {logOutButton}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Menu);
  


