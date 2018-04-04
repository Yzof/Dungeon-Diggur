import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  signupLink: <Link to="/signup" className="signup-navbar-button">Sign Up</Link>,
  loginLink: <Link to="/login" className="login-navbar-button">Login</Link>
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
