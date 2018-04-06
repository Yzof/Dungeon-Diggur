import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as galleryActions from './actions/gallery_actions';

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
  window.dispatch = store.dispatch;
  /* ------------------ TEST ------------------ */

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={ store } />, root);
});
