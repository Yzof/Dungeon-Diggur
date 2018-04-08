import React from 'react';
import GalleryIndexItem from "./gallery_index_item";

class MainGallery extends React.Component {
  componentDidMount() {
    this.props.fetchGalleries();
  }

  render(){
    const galleryItems = this.props.galleries.map(
      gallery => <GalleryIndexItem key={`gallery-index-${gallery.id}`} gallery={gallery} />
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
