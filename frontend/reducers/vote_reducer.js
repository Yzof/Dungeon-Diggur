import merge from 'lodash/merge';
import { RECEIVE_VOTE } from "../actions/vote_actions";

const voteReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_VOTE:
      const vote = action.vote;
      return merge({}, oldState, { [vote.id]: vote });
    default:
      return oldState;
  }
};

export default voteReducer;
