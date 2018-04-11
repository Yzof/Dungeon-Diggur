import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { createGallery } from '../../actions/gallery_actions';
import { uploadImage } from '../../actions/asset_actions';
import UploadButton from './upload_button';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  createGallery: (gallery) => dispatch(createGallery(gallery)),
  uploadImage: (imageData) => dispatch(uploadImage(imageData))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadButton)
);
