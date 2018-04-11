import merge from 'lodash/merge';
import {
  RECEIVE_ALL_ASSETS,
  RECEIVE_ONE_ASSET
} from '../actions/asset_actions';

const assetReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_ASSETS:
      return action.assets;
    case RECEIVE_ONE_ASSET:
      let asset = action.asset;
      let newState = merge({}, oldState, {[asset.id]: asset});
        return newState;
    default:
      return oldState;
  }
};
