import React from 'react';
import { Link } from 'react-router-dom';

class Missing extends React.Component {
  render() {
    return (
    <div className="missing-container">
      <h1 className="not-found">404 Page Not Found</h1>
      <Link to='/' className="missing-return-link">Return to Home</Link>
    </div>
    );
  }
}

export default Missing;
