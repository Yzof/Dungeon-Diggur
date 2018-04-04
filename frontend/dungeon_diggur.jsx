import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.sampleUser = {username: "jeff", password:"password"};
  const root = document.getElementById("root");
  window.login = ApiUtil.login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  window.fetchUser = ApiUtil.fetchUser;
  ReactDOM.render(<h1>Hello World</h1>, root);
});
