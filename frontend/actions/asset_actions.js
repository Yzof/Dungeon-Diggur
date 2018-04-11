import * as APIUtil from '../util/asset_api_util';
import { receiveGallery } from './gallery_actions';

export const RECEIVE_ALL_ASSETS = "RECEIVE_ALL_ASSETS";
export const RECEIVE_ONE_ASSET = "RECEIVE_ONE_ASSET";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllAssets = (assets) => ({
  type: RECEIVE_ALL_ASSETS,
  assets
});

export const receiveAsset = asset => ({
  type: RECEIVE_ONE_ASSET,
  asset
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAssets = () => dispatch => (
  APIUtil.fetchAssets().then(
    (assets) => dispatch(receiveAllAssets(assets))
  ).fail(
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchAsset = (id) => dispatch => (
  APIUtil.fetchAsset(id).then(
    (asset) => dispatch(receiveAsset(asset))
  ).fail(
    errors => dispatch(receiveErrors(errors))
  )
);

//Used by the button
export const uploadImage = (imageData) => dispatch => (
  APIUtil.uploadImage(imageData).then(
    (gallery) => dispatch(receiveGallery(gallery))
  )
);
