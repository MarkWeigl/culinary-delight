import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import './splash.css';

export class Splash extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
    render() {
      if (this.props.loggedIn) {
        return <Redirect to="/recipe-list" />;
      }
      return (
          <div className="home">
              <h2>Welcome!</h2><br></br>
              <h4>Enter your recipes on Culinary Delight.</h4>
              <h4>You can quickly view your recipes, edit them, and delete recipes you no longer need.</h4>
              <LoginForm />
              <br></br>
              <Link to="/register">Register</Link>
          </div>
      );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Splash);

