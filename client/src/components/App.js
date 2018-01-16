import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import About from './shared/About';
import Test from './shared/Test';
import Login from './login/Login';
import Forgot from './login/Forgot';
import Register from './login/Register';
import Flash from './Flash';
import Home from './home/Home';
import Profile from './profile/Profile';
import Info from './home/Info';
import AccountSummary from './profile/AccountSummary';
import AddBanks from './profile/AddBanks';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import NewPassword from './login/NewPassword';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Test' component={Test} />
            <Route exact path='/Info' component={Info} />
            <ProtectedRoute exact path='/Profile' component={Profile} />
            <ProtectedRoute exact path='/Profile/AccountSummary' component={AccountSummary} />
            <ProtectedRoute exact path='/Profile/AddBank' component={AddBanks} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/recoverpassword' component={Forgot} />
            <Route exact path='/reset_password' component={NewPassword} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
