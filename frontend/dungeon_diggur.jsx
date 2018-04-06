import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as userActions from './actions/user_actions';
import { fetchUser } from './util/user_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  /* ------------------ TEST ------------------ */
  window.sampleGallery = {id:4, author_id: 1};
  window.store = store;
  window.fetchUserAction = userActions.fetchUser;
  window.fetchUser = fetchUser;
  window.dispatch = store.dispatch;
  /* ------------------ TEST ------------------ */

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={ store } />, root);
});
