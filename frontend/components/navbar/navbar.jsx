import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  componentDidMount() {
    console.log(this.props.user);
  }

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
            [loginLink, signupLink]
          )
        }

      </header>
    );
  }
}

export default NavBar;
