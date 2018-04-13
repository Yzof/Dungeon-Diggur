import React from 'react';

class Tags extends React.Component {
  constructor(props) {
      super(props);
    this.link = this.link.bind(this);
  }

  link(tag) {
    return e => ( this.props.history.push(`/tag/${tag.id}`));
  }

  render() {
    let tagIndex = this.props.gallery.tags.map(
      (tag) => <li onClick={this.link(tag)} key={tag.id} className="gallery-tag" >{tag.name}</li>
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
