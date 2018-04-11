import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGallery, editGallery } from '../../actions/gallery_actions';
import { uploadImage } from '../../actions/asset_actions';
import GalleryForm from './gallery_form';

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
  fetchGallery: (id) => dispatch(fetchGallery(id)),
  uploadImage: (imageData) => dispatch(uploadImage(imageData)),
  editGallery: (gallery) => dispatch(editGallery(gallery))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryForm));
