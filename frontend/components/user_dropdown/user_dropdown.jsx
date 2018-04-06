import React from 'react';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.revealDropdown = this.revealDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  revealDropdown(event) {
    event.stopPropagation(); // prevent event from being picked up by body
  	$('.user-dropdown').removeClass('hidden');
    $('.user-dropdown-button').off('click', this.revealDropdown);
    $(document).on('click', this.hideDropdown);
  }

  hideDropdown() {
  	$('.user-dropdown').addClass('hidden');
    $('.gear-dropdown-button').on('click', this.revealDropdown);
    $(document).off('click', this.hideDropdown);
  }

  render() {
    const { user, logout } = this.props;
    //Needs to link to user profile
    return (
      <div className="account-username">
        <p
          id="user-dropdown-button"
          onClick={this.revealDropdown}
          >{user.username}</p>
        <div className="user-dropdown hidden">
          <ul className="user-dropdown-options">
            <li className="user-dropdown-item">Profile TODO</li>
            <li className="user-dropdown-item">Galleries TODO</li>
            <li className="user-dropdown-item" onClick={() => logout()}>
              <button className="dropdown-logout">LogOut</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserDropdown;
