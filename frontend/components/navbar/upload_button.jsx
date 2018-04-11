import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      {
        upload_preset: "gxztbuau",
        cloud_name: "dkk7qjv7c",
        multiple: false,
      },
      (error, results) => {
        if(!error){
          this.props.createGallery(
            {title: "Title", author_id: this.props.user.id}
          ).then(
            (response) => {
              this.props.uploadImage(
                {path: results[0].url, gallery_id: response.gallery.id}
              ).then(
                ({ gallery }) => this.props.history.push(`/galleries/${gallery.id}/create`)
              );
            }
          );
        }
      });
  }

  render() {
    return (
      <div className="upload-button" onClick={this.upload}>
        <p>Add Gallery</p>
      </div>
    );
  }
}

export default UploadButton;
