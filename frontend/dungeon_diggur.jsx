import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as tagActions from './actions/tag_actions';
import { fetchUser } from './actions/user_actions';
import * as tagUtil from './util/tag_api_util';

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
  window.store = store;
  window.sampleVote = {vote_type: "down", voteable_id: 3, voteable_type:"Gallery", user_id: 1};
  window.fetchTag = tagActions.fetchTag;
  window.tagUtil = tagUtil;
  window.fetchUser = fetchUser;
  window.dispatch = store.dispatch;
  /* ------------------ TEST ------------------ */

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={ store } />, root);
});
