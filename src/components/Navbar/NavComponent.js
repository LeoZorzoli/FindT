import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../reducers/loginReducer'

const NavComponent = () => {

    const user = useSelector(state => state.login)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = async () => {
        window.localStorage.removeItem('loggedUser')
        dispatch(logout())
        history.push('/')
    }

    const userLogged = () => {
        return(
            <>
            <Nav className="mr-auto">
                <NavLink className="nav-link" to="/newproject">New project</NavLink>
                <NavLink className="nav-link" to="/projects">List of Projects</NavLink>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link className="nav-link" href="#" onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
            </>
        )
    }
    const userAnonymous = () => {
        return(
            <Nav className="ml-auto">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </Nav>
        )
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><NavLink to="/">React-Bootstrap</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {user ? userLogged() : userAnonymous()}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComponent;