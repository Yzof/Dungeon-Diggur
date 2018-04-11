import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GalleryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", description: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addImage = this.addImage.bind(this);
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
          debugger;
          this.props.uploadImage(
            {path: results[0].url, gallery_id: this.state.id}
          );
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editGallery(this.state);
  }

  render() {
    let galleryImages = "";

    if (this.props.gallery) {
      galleryImages = this.props.gallery.assets.map(
        (asset) => (
          <li className="gallery-list-item" key={`asset-item-${asset.id}`}>
            <img src={asset.path}/>
          </li>
        )
      );
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
          <textarea
            value={this.state.body}
            onChange={this.updateText("body")}
            className="gallery-form-description gallery-form-input"
            placeholder="Please Describe your Gallery!"
          />
          <button value={this.props.formType} className="upload-button gallery-form-submit">
            {this.props.formType}
          </button>
      </form>
      </div>
    );
  }
}

export default GalleryForm;
