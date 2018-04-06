import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import MainGalleryContainer from './gallery/main_gallery_container';
import MissingContainer from './fourofour/missing_container';
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
    <nav>
      <NavBarContainer />
    </nav>

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer}/>
      <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
      <Route exact path="/" component={MainGalleryContainer}/>
      <Route path="/" component={MissingContainer}/>
    </Switch>
  </div>
);
};

export default App;
