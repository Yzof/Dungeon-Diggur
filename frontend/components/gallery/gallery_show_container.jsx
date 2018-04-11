import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGallery } from '../../actions/gallery_actions';
import GalleryShow from './gallery_show';

const mapStateToProps = (state, ownProps) => {
  const galleryId = ownProps.match.params.gallery_id;
  let obj = {
    user: state.session.currentUser,
    gallery_id: galleryId,
    gallery: state.entities.galleries[galleryId],
    formType: "Create"
  };

  return (obj);
};

const mapDispatchToProps = dispatch => ({
  fetchGallery: (id) => dispatch(fetchGallery(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryShow));
