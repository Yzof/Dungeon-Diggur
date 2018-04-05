import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.sampleUser = {username: "jeff", password:"password"};
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  /* ------------------ TEST ------------------ */
  window.fetchUser = APIUtil.fetchUser;
  /* ------------------ TEST ------------------ */

  window.store = store;
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={ store } />, root);
});
