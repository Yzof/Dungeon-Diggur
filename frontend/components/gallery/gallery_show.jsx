import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MainGalleryContainer from './main_gallery_container';

class GalleryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.gallery_id !== nextProps.match.params.gallery_id) {
      this.props.fetchGallery(nextProps.match.params.gallery_id);
    }
  }

  componentDidMount() {
    this.props.fetchGallery(this.props.gallery_id);
    $('.main-gallery-container').removeClass("main-gallery-container");
  }

  componentWillUnmount() {
    $('#main').addClass("main-gallery-container");
    $('#main').removeClass("gallery-show-main-gallery");
  }

  render() {
    let galleryImages = "";

    if (this.props.gallery) {
      galleryImages = this.props.gallery.assets.map(
        (asset) => (
          <li className="gallery-list-item" key={`asset-item-${asset.id}`}>
            <img src={asset.path}/>
          </li>
        )
      );
      $('.main-gallery').addClass('gallery-show-main-gallery');
    } else {
      return (
        <div className="missing-container">
          <p className="not-found">LOADING</p>
        </div>
      );
    }

    return (
      <div className="content">
        <div className="content-left">
          <h1
            className="gallery-show-title"
            key={`title-${this.props.gallery.id}`}
            >{this.props.gallery.title}
          </h1>
          <ul className="gallery-list-container">
            {galleryImages}
          </ul>
          <p className="gallery-show-description">{this.props.gallery.description}</p>
        </div>
        <div className="content-right">
          <MainGalleryContainer />
        </div>
      </div>
    );
  }
}

export default GalleryShow;
