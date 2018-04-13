import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGallery, receiveAllGalleries } from '../../actions/gallery_actions';
import GalleryShow from './gallery_show';

const mapStateToProps = (state, ownProps) => {
  const galleryId = ownProps.match.params.gallery_id;
  let obj = {
    user: state.session.currentUser || {id: -1},
    gallery_id: galleryId,
    gallery: state.entities.galleries[galleryId],
    galleries: Object.keys(state.entities.galleries).map( id => state.entities.galleries[id]),
    formType: "Create"
  };

  return (obj);
};

const mapDispatchToProps = dispatch => ({
  fetchGallery: (id) => dispatch(fetchGallery(id)),
  receiveAllGalleries: (galleries) => dispatch(receiveAllGalleries(galleries))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryShow));
