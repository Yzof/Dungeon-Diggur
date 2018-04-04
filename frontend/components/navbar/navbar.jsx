import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    const { user, loginLink, signupLink, logout } = this.props;
    return (
      <header>
          <Link to="/" className="header-link">
            <h1>Dungeon Diggur</h1>
          </Link>
        {
          user ? (
            [user.username, <button onClick={() => logout()}>LogOut</button>]
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
