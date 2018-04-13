import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTag } from '../../actions/tag_actions';
import { receiveAllGalleries } from '../../actions/gallery_actions';
import TagGallery from './tag_gallery';

const mapStateToProps = (state, ownProps) => {
  return {
    tag_id: ownProps.match.params.id,
    galleries: Object.keys(state.entities.galleries).map( id => state.entities.galleries[id])
} ;
};

const mapDispatchToProps = dispatch => ({
  fetchTag: (id) => dispatch(fetchTag(id)),
  receiveAllGalleries: (galleries) => dispatch(receiveAllGalleries(galleries))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagGallery));
