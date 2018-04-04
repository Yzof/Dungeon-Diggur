import React from 'react';
import { withRouter } from 'react-router-dom';

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
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() (
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}> error} </li>
      ))}
    </ul>
  )

  render() (
    <div className="session-form-container">
      <form className="session-form-box" onSubmit={this.handleSubmit}>
        <h1>Dungeon Diggur</h1>
        <br />
        Please {this.props.formType} or {this.props.navLink}
        {this.renderErrors()}
        <div className="session-form">
          <br />
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update{"username"}}/>
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update{"password"}}/>
          </label>

          <br />

          <input className="session-submit" type='submit' value={this.props.formType}/>
        </div>
      </form>
    </div>
  )
}

export default withRouter(SessionForm);
