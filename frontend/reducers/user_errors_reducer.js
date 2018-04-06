import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_USER
} from "../actions/user_actions";

const userErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      const response = action.errors.responseJSON || [];
      return response;
    case RECEIVE_USER:
      return [];
    default:
      return oldState;
  }
};

export default userErrorsReducer;
