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
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="menu">
                <h1>Culinary Delight</h1>
                {logOutButton}
            </div>
        );
    }
}
//export default function Menu(props) 
  


