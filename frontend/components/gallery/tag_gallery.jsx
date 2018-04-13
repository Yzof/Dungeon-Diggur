import React from 'react';
import GalleryIndexItem from "./gallery_index_item";

class TagGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.receiveAllGalleries({ galleries: {} });
  }

  componentDidMount() {
    this.props.fetchTag(this.props.tag_id);
  }

  componentWillUnmount() {
    this.props.receiveAllGalleries({ galleries: {} });
  }

  render() {
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

export default TagGallery;
