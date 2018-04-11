import React from 'react';
import MainGalleryContainer from '../gallery/main_gallery_container';
import GalleryIndexItem from '../gallery/gallery_index_item';
import UserBioContainer from './user_bio_container';

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.user_id);
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
      let main = document.getElementById("main");
      main.classList.add("shrink");
    }
    return (
      <div className="content">
        <div className="content-left">
          <div className="display-container">
            <h1 className="display-title">Users Galleries</h1>
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

export default MainDisplay;
