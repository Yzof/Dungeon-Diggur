import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = (id) => dispatch => (
  APIUtil.fetchUser(id).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

export const updateUser = (user) => dispatch => (
  APIUtil.updateUser(user).then(
    (upUser) => dispatch(receiveUser(upUser)),
    (errors) => dispatch(receiveErrors(errors))
  )
);

//todo Create fetchSetofUsers
