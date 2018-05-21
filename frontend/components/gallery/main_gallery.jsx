import React from 'react';
import GalleryIndexItem from "./gallery_index_item";

class MainGallery extends React.Component {
  componentWillMount() {
    this.props.fetchGalleries();
  }

  render(){
    // We will need to pass in the class here, then add it in the index item component
    // We are going to need about 7 different classes, space 3 seconds apart
    const classes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    const galleryItems = this.props.galleries.map(
      (gallery) => {
        // We will find the class in here
        // INcrement an index and key into the classes array
        // We reworked this to reduce line length
        if (gallery.assets[0]) {
          return <GalleryIndexItem key={`gallery-index-item-${gallery.id}`} gallery={gallery} />;
        } else {
          return null;
        }
      }
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
