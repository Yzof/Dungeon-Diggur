import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserDropdownContainer from '../user_dropdown/user_dropdown_container';
import UploadButtonContainer from './upload_button_container';

class NavBar extends React.Component {

  render() {
    const { user, loginLink, signupLink } = this.props;
    return (
      <header>
          <Link to="/" className="header-link">
            <h1>Dungeon Diggur</h1>
          </Link>
        {
          user ? (
            <div className="logged-links">
              <UploadButtonContainer />
              <UserDropdownContainer user={user} />
            </div>
          ) : (
            <div id="nav-buttons">
              {loginLink}
              {signupLink}
            </div>
          )
        }

      </header>
    );
  }
}

export default NavBar;
