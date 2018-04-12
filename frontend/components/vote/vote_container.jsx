import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createVote, deleteVote, updateVote } from '../../actions/vote_actions';
import Vote from './vote';
import { countVotes } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  gallery: state.entities.galleries[ownProps.match.params.gallery_id],
  user: state.session.currentUser || null,
  count: countVotes(state.entities.galleries[ownProps.match.params.gallery_id])
});

const mapDispatchToProps = dispatch => ({
  createVote: (vote) => dispatch(createVote(vote)),
  deleteVote: (id) => dispatch(deleteVote(id)),
  updateVote: (vote) => dispatch(updateVote(vote))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Vote));
