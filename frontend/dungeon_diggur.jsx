import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchGallery } from './actions/gallery_actions';
import { uploadImage, fetchAssets } from './util/asset_api_util';

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
  window.sampleGallery = {title:"wow", description:"who", author_id: 1};
  window.fetchGallery = fetchGallery;
  window.uploadImage = uploadImage;
  window.fetchAssets = fetchAssets;
  window.dispatch = store.dispatch;
  /* ------------------ TEST ------------------ */

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={ store } />, root);
});
