import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_GALLERY
} from "../actions/gallery_actions";

const galleryErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      const response = action.errors.responseJSON || [];
      return response;
    case RECEIVE_GALLERY:
      return [];
    default:
      return oldState;
  }
};

export default galleryErrorsReducer;
