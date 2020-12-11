import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './components/Navbar/NavComponent';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <Router>
      <NavComponent />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route path="/login" component={() => <LoginPage />} />
          <Route path="/register" component={() => <RegisterPage /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
