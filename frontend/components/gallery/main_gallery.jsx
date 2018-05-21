import React from 'react';
import GalleryIndexItem from "./gallery_index_item";

class MainGallery extends React.Component {
  componentWillMount() {
    this.props.fetchGalleries();
  }

  render(){
    const classes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let i = 0;
    
    const galleryItems = this.props.galleries.map(
      (gallery) => {
        // The following 3 lines add the correct animation class
        let index = i % classes.length;
        let animationClass = classes[index];
        i++;

        if (gallery.assets[0]) {
          return <GalleryIndexItem
              key={`gallery-index-item-${gallery.id}`}
              gallery={gallery}
              animationClass={animationClass}
            />;
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
