import * as APIUtil from "../util/gallery_api_util";

export const RECEIVE_ALL_GALLERIES = "RECEIVE_ALL_GALLERIES";
export const RECEIVE_GALLERY = "RECEIVE_GALLERY";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveAllGalleries = ({galleries}) => ({
  type: RECEIVE_ALL_GALLERIES,
  galleries
});

const receiveGallery = (gallery) => ({
  type: RECEIVE_GALLERY,
  gallery
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchGalleries = () => dispatch => (
  APIUtil.fetchGalleries().then(
    (galleries) => dispatch(receiveAllGalleries(galleries)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

export const fetchGallery = (id) => dispatch => (
  APIUtil.fetchGallery(id).then(
    (gallery) => dispatch(receiveGallery(gallery)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

export const createGallery = (gallery) => dispatch => (
  APIUtil.createGallery(gallery).then(
    (newGallery) => dispatch(receiveGallery(newGallery)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

export const deleteGallery = (id) => dispatch => (
  APIUtil.deleteGallery(id).then(
    (errors) => dispatch(receiveErrors(errors))
  )
);
