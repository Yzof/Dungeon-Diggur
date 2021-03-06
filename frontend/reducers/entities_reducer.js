import { combineReducers } from 'redux';

import galleryReducer from "./gallery_reducer";
import userReducer from './user_reducer';
import assetReducer from './asset_reducer';
import voteReducer from './vote_reducer';

export default combineReducers({
  galleries: galleryReducer,
  users: userReducer,
  assets: assetReducer,
  votes: voteReducer
});
