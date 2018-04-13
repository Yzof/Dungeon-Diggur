import React from 'react';

class UserBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user || {biography: ""};
    this.currentUser = this.props.currentUser || {id: -1};
    this.updateBio = this.updateBio.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateBio(e) {
    this.setState({biography: e.target.value});
  }

  updateUser(e) {
    e.preventDefault();

    this.props.updateUser(this.state);
  }

  render() {
    let btn = "";
    if (this.props.user.id === this.currentUser.id) {
      //let the text area be changeable
      $("textarea").attr("readonly", null);
      btn = <button className="upload-button" >Change Bio</button>;
    } else {
      //Don't let the text area be changeable
      $("textarea").attr("readonly", "readonly");
    }

    return (
      <div className="user-bio-container">
        <form onSubmit={this.updateUser}>
          <textarea
            className="user-bio"
            placeholder="Please tell us about yourself"
            onChange={this.updateBio}
            value={this.state.biography}
            />
          {btn}
        </form>
      </div>
    );
  }
}

export default UserBio;
