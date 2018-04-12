import React from 'react';

class Tags extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let tagIndex = this.props.gallery.tags.map(
      (tag) => <li key={tag.id} className="gallery-tag" >{tag.name}</li>
    );
    return(
      <div>
        <ul className="horizontal-li">
          {tagIndex}
        </ul>
      </div>
    );
  }
}

export default Tags;
