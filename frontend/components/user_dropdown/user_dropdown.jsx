import React from 'react';

class UserDropdown extends React.Component {
  render() {
    const { user, logout } = this.props;
    //Needs to link to user profile
    return (
      <div className="account-username">
        <p id="user-dropdown-button">{user.username}</p>
        <div className="user-dropdown">
          <ul className="user-dropdown-options">
            <li>Profile TODO</li>
            <li>Galleries TODO</li>
            <li className="dropdown-logout"><button onClick={() => logout()}>LogOut</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserDropdown;
