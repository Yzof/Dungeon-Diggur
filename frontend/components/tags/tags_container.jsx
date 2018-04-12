import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tags from './tags';

const mapStateToProps = (state, ownProps) => ({

});

// Need to Select Galleries by tag. 

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tags));
