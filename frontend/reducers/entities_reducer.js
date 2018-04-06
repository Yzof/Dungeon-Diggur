import { combineReducers } from 'redux';

import galleryReducer from "./gallery_reducer";

export default combineReducers({
  galleries: galleryReducer,
});
