import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MainGalleryContainer from './main_gallery_container';
import VoteContainer from '../vote/vote_container';
import TagsContainer from '../tags/tags_container';

class GalleryShow extends React.Component {
  constructor(props) {
    super(props);
    this.nextGallery = this.nextGallery.bind(this);
    this.prevGallery = this.prevGallery.bind(this);
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
    $('.main-gallery-container').removeClass('widthless');
    $('#main').removeClass("gallery-show-main-gallery");
    this.props.receiveAllGalleries({ galleries: {} });
  }

  nextGallery(e) {
    e.preventDefault();
    let nextId = this.props.gallery.id + 1;

    if (nextId <= this.props.galleries.length) {
      this.props.history.push(`/galleries/${nextId}`);
    } else {
      this.props.history.push(`/galleries/${1}`);
    }
  }

  prevGallery(e) {
    e.preventDefault();
    let prevId = this.props.gallery.id -1;
    let last = this.props.galleries.length - 1;
    if (prevId > 0) {
      this.props.history.push(`/galleries/${prevId}`);
    } else {
      this.props.history.push(`/galleries/${this.props.galleries[last].id}`);
    }
  }

  render() {
    let galleryImages, userDetails = "";

    if (this.props.gallery) {
      galleryImages = this.props.gallery.assets.map(
        (asset) => (
          <li className="gallery-list-item" key={`asset-item-${asset.id}`}>
            <img src={asset.path}/>
          </li>
        )
      );
      $('.main-gallery-container').addClass('widthless');
      $('.main-gallery').addClass('gallery-show-main-gallery');
      if (this.props.user.id === this.props.gallery.author_id) {
        userDetails = <Link
                        to={`/galleries/${this.props.gallery.id}/edit`}
                        >Edit
                      </Link>;
      } else {
        userDetails = <h1>By:
                        <Link
                          to={`/user/${this.props.gallery.author_id}`}
                          >{this.props.gallery.author.username}
                        </Link>
                      </h1>;
      }
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
          <div className="gallery-show-title">
            <div className="gallery-name">
            <h1
              key={`title-${this.props.gallery.id}`}
              >{this.props.gallery.title}
            </h1>
              {userDetails}
            </div>
            <div>
              <button
                className="gallery-select-button left-button"
                onClick={this.prevGallery}
                >&larr;
              </button>
              <button
                className="gallery-select-button right-button"
                onClick={this.nextGallery}
                >&rarr;
              </button>
            </div>
          </div>
          <ul className="gallery-list-container">
            {galleryImages}
          </ul>
          <div className="gallery-show-description">
            <div className="gallery-show-details">
              <VoteContainer />
              <TagsContainer gallery={this.props.gallery} />
            </div>
            <p>{this.props.gallery.description}</p>
          </div>
        </div>
        <div className="content-right">
          <MainGalleryContainer />
        </div>
      </div>
    );
  }
}

export default GalleryShow;
