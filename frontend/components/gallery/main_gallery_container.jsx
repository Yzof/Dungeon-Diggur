import React from 'react';
import { connect } from 'react-redux';
import { fetchGalleries } from '../../actions/gallery_actions';
import MainGallery from './main_gallery';

const mapStateToProps = state => ({
  galleries: Object.keys(state.entities.galleries).map( id => state.entities.galleries[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchGalleries: () => dispatch(fetchGalleries())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainGallery);
