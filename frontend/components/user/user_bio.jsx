import React from 'react';

class UserBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user.biography || "";
    this.currentUser = this.props.currentUser || {id: -1};
  }

  render() {
    if (this.props.user.id === this.currentUser.id) {
      //let the text area be changeable
      $("textarea").attr("readonly", null);
    } else {
      //Don't let the text area be changeable
      $("textarea").attr("readonly", "readonly");
    }

    return (
      <div className="user-bio-container">
        <textarea
          className="user-bio"
          placeholder="Please tell us about yourself"
        />
      </div>
    );
  }
}

export default UserBio;
