import merge from 'lodash/merge';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      const response = action.errors.responseJSON || [];
      return response;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
