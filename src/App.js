import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux'

import NavComponent from './components/Navbar/NavComponent';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {

  const user = useSelector(state => state.login)

  return (
    <div>
      <Router>
      <NavComponent />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route path="/login" >
            {!user ? <LoginPage /> : <Redirect exact to="/" />}
          </Route>
          <Route path="/register" >
            {!user ? <RegisterPage /> : <Redirect exact to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
