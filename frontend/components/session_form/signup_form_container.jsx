import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "signup",
  navLink: <Link to="/login" className="session-submit session-login">Login </Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
