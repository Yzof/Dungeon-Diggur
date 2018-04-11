import React from 'react';
import GalleryIndexItem from "./gallery_index_item";

class MainGallery extends React.Component {
  componentWillMount() {
    this.props.fetchGalleries();
  }

  render(){
    const galleryItems = this.props.galleries.map(
      (gallery) => (
        gallery.assets[0] ? <GalleryIndexItem key={`gallery-index-item-${gallery.id}`} gallery={gallery} /> : null
    )
    );
    return (
      <div className="main-gallery-container" id="main">
        <ul className="main-gallery">
          {galleryItems}
        </ul>
      </div>
    );
  }
}

export default MainGallery;
