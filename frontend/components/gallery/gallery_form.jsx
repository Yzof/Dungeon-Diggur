import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      tag_names: [],
      newTag: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addImage = this.addImage.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchGallery(this.props.gallery_id).then(
      (response) => this.setState(response.gallery)
    );
  }

  updateText(type) {
    return e => (this.setState({
      [type]: e.target.value
    }));
  }

  addTag(e) {
    e.preventDefault();
    this.setState({
      tag_names: [ ...this.state.tag_names, this.state.newTag],
      newTag: ""
    });
  }

  removeTag(idx) {
    this.setState({
      tag_names: this.state.tag_names.filter((_, index) => index !== idx)
    });
  }


  addImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        upload_preset: "gxztbuau",
        cloud_name: "dkk7qjv7c",
        multiple: false,
      },
      (error, results) => {
        if(!error){
          this.props.uploadImage(
            {path: results[0].url, gallery_id: this.state.id}
          );
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editGallery(this.state).then(
      ({ gallery }) => this.props.history.push(`/galleries/${gallery.id}`)
    );

  }

  render() {
    let galleryImages, tagNames = "";
    if (this.props.gallery) {
      galleryImages = this.props.gallery.assets.map(
        (asset) => (
          <li className="gallery-list-item" key={`asset-item-${asset.id}`}>
            <img src={asset.path}/>
          </li>
        )
      );

      tagNames = this.state.tag_names.map( (tag, idx) => {
        const clickHandler = () => this.removeTag(idx);
        return (
          <li
            key={idx}
            onClick={clickHandler}
            className="gallery-tag"
            >{tag}
          </li>
        );
      });
    } else {
      return (
        <div className="missing-container">
          <p className="not-found">LOADING</p>
        </div>
      );
    }

    return (
      <div className="gallery-form-container">
        <form onSubmit={this.handleSubmit} className="gallery-form">
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateText("title")}
            className="gallery-form-title gallery-form-input"
          />


          <ul className="gallery-list-container">
            {galleryImages}
          </ul>


          <button
            className="upload-button gallery-button"
            onClick={this.addImage}
            >Add Image
          </button>


          <div className="gallery-inline">
            <ul className="gallery-form-tags horizontal-li">
              {tagNames}
            </ul>
            <input
              className="gallery-form-input "
              onChange={this.updateText("newTag")}
              placeholder="Enter a New Tag"
              value={this.state.newTag}
            />
            <button
              className="upload-button gallery-button"
              type="button"
              onClick={this.addTag}
              >Add Tag
            </button>
          </div>


          <textarea
            value={this.state.body}
            onChange={this.updateText("body")}
            className="gallery-form-description gallery-form-input"
            placeholder="Please Describe your Gallery!"
          />


        <button type="submit" value={this.props.formType} className="upload-button gallery-form-submit">
            {this.props.formType}
          </button>
      </form>
      </div>
    );
  }
}

export default GalleryForm;
