import React from 'react';
import { connect } from 'react-redux';
import MainDisplay from './display';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.user_id];
  console.log(user);
  return ({ user });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
