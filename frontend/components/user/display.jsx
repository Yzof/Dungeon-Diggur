import React from 'react';
import MainGalleryContainer from '../gallery/main_gallery_container';
import GalleryIndexItem from '../gallery/gallery_index_item';
import UserBioContainer from './user_bio_container';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.user_id);
    $(".main-gallery-container").addClass("shrink");
  }

  render() {
    let galleryItems, user, UserBio = "";
    if (this.props.user) {
      user = this.props.user;
      UserBio = <UserBioContainer user={user}/>;
      galleryItems = user.galleries.map(
        gallery => (
          <GalleryIndexItem
            key={`display-gallery-index-${gallery.id}`}
            gallery={gallery}
          />
        )
      );
    }
    return (
      <div className="content">
        <div className="content-left">
          <div className="display-container">
            <ul>
              {galleryItems}
            </ul>
          </div>
          <MainGalleryContainer />
        </div>
        <div className="content-right">
          {UserBio}
        </div>
      </div>
    );
  }
}

export default Display;
