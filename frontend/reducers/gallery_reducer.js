import merge from 'lodash/merge';
import {
  RECEIVE_ALL_GALLERIES,
  RECEIVE_GALLERY
} from "../actions/gallery_actions";
/*
  This reducer will handle both the "main gallery" slice of state and
  the singular view of a gallery.
*/
const galleryReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_GALLERIES:
    console.log(action.galleries);
      return merge({}, oldState,  action.galleries);
    case RECEIVE_GALLERY:
      const gallery = action.gallery;
      return merge({}, oldState, { [gallery.id]: gallery });
    default:
      return oldState;
  }
};

export default galleryReducer;
