import React from 'react';
import MainGalleryContainer from '../gallery/main_gallery_container';
import GalleryIndexItem from '../gallery/gallery_index_item';
import UserBioContainer from './user_bio_container';
import SidebarSelector from './sidebar_selector';

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
          <div id="selected-display-container">
            //todo check file for instructions
          </div>
          <div className="display-container">
            <ul>
              {galleryItems}
            </ul>
          </div>
          <MainGalleryContainer />
        </div>
        <div className="content-right">
          {<SidebarSelector />}
          {UserBio}
        </div>
      </div>
    );
  }
}

export default MainDisplay;
