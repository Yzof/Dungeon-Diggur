import React from 'react';
import { connect } from 'react-redux';
import UserBio from './user_bio';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return ({ currentUser });
};

export default connect(mapStateToProps, null)(UserBio);
