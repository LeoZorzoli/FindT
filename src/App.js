import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

import NavComponent from './components/Navbar/NavComponent';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

import { getProjects } from './reducers/projectsReducer'

function App() {

  const user = useSelector(state => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <div>
      <Router>
      <NavComponent />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route path="/projects" >
            {user ? <ProjectsPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" >
            {!user ? <LoginPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/register" >
            {!user ? <RegisterPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
