import { combineReducers } from 'redux';

import galleryReducer from "./gallery_reducer";
import userReducer from './user_reducer';

export default combineReducers({
  galleries: galleryReducer,
  users: userReducer,
});
