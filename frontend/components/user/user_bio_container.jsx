import React from 'react';
import { connect } from 'react-redux';
import UserBio from './user_bio';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return ({ currentUser });
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBio);
