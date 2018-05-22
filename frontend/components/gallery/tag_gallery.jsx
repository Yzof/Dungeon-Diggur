import React from 'react';
import GalleryIndexItem from "./gallery_index_item";

class TagGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: null};
    this.tag_id = this.props.tag_id;
  }

  componentWillMount() {
    this.props.receiveAllGalleries({ galleries: {} });
  }

  componentDidMount() {
    let result = this.props.fetchTag(this.props.tag_id);
    result.then(
      ({galleries}) => {
        let first = (Object.keys(galleries))[0];
        let tags = galleries[first].tags;

        for (var i = 0; i < tags.length; i++) {
          let currentTag = tags[i];

          // For some reason, this.tag_id is a string
          if (currentTag.id == this.tag_id) {
            this.setState({ tag: currentTag});


          }
        }
      }
    );
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
    let tagName = "";
    if (this.state.tag) {
      tagName = this.state.tag.name;
    }
    return (
      <div className="main-gallery-container" id="main">
        <h1 className="tag-name">These are the <span className="highlight">{tagName}</span> galleries.</h1>
        <ul className="main-gallery">
          {galleryItems}
        </ul>
      </div>
    );
  }
}

export default TagGallery;
