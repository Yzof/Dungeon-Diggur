import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  signupLink: <Link to="/signup" id="signup-navbar-button">Sign Up</Link>,
  loginLink: <Link to="/login" id="login-navbar-button">Login</Link>
});


export default connect(mapStateToProps,null)(NavBar);
