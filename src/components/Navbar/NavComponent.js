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
            <Nav className="ml-auto">
                <Nav.Link className="nav-link link-style" href="#" onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
        )
    }
    const userAnonymous = () => {
        return(
            <Nav className="ml-auto">
                <NavLink className="nav-link link-style" to="/login">Login</NavLink>
                <NavLink className="nav-link link-style" to="/register">Register</NavLink>
            </Nav>
        )
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><NavLink to="/">React-Bootstrap</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {user ? userLogged() : userAnonymous()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComponent;