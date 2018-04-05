import { connect } from 'react-redux';
import React from 'react';
import UserDropdown from './user_dropdown';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
