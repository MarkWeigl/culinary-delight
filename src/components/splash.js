import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import './splash.css';

export class Splash extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
    render() {
      if (this.props.loggedIn) {
        return <Redirect to="/dashboard" />;
      }
      return (
          <div className="home">
              <h2>Welcome to Culinary Delight</h2>
              <h4>Enter your recipes on Culinary Delight.  You can quickly view your recipes, edit them, and delete recipes you no longer need.</h4>
              <LoginForm />
              <Link to="/register">Register</Link>
          </div>
      );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Splash);

