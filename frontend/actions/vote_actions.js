import * as APIUtil from '../util/vote_api_util.js';
import { receiveGallery } from './gallery_actions';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


export const createVote = (vote) => dispatch => (
  APIUtil.createVote(vote).then(
    (gallery) => dispatch(receiveGallery(gallery)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

export const updateVote = (vote) => dispatch => (
  APIUtil.updateVote(vote).then(
    (gallery) => dispatch(receiveGallery(gallery)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

export const deleteVote = (props) => dispatch => (
  APIUtil.deleteVote(props).then(
    (gallery) => dispatch(receiveGallery(gallery)),
    (errors) => dispatch(receiveErrors(errors))
  )
);
