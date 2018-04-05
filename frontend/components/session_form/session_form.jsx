import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return e => (this.setState({
      [type]: e.target.value
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}> error} </li>
      ))}
    </ul>
    );
  }

  render() {
    return (
    <div>
      <Link to='/' className='return-link'>Take Me Home</Link>
      <div className="session-form-container">
        <form className="session-form-box" onSubmit={this.handleSubmit}>
          <h1 id="session-logo">Dungeon Diggur</h1>

          {this.renderErrors()}
          <div className="session-form">

              <input
                className='session-input'
                placeholder='Username'
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />

              <input
                className='session-input'
                placeholder='Password'
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />

          </div>
          <input className="session-submit" id='submit-button' type='submit' value={this.props.formType}/>
          {this.props.navLink}
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
