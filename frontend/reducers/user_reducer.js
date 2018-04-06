import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, { [user.id]: user });
    default:
      return oldState;
  }
};

export default userReducer;
