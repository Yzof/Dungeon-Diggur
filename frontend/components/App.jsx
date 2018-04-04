import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/root_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => {
  return (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Dungeon Diggur</h1>
      </Link>
      <Link to="/login">
        Log In
      </Link>
      <Link to="/signup">
        Sign up
      </Link>
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer}/>
      <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
      <Route path="/"/>
    </Switch>
  </div>
);
};

export default App;
