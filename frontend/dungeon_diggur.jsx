import React from 'react';
import ReactDOM from 'react-dom';
import * as action from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  window.sampleUser = {username: "jeff", password:"password"};
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.login = action.login;
  window.signup = action.signup;
  window.logout = action.logout;
  ReactDOM.render(<h1>Hello World</h1>, root);
});
