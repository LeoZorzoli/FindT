import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../reducers/loginReducer'
import Ribbon from '../Ribbon/Ribbon';
import './NavComponent.scss';

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
            <Container>
            <Nav className="mr-auto">
                <NavLink className="nav-link" to="/newproject">New project</NavLink>
                <NavLink className="nav-link" to="/projects">List of Projects</NavLink>
                <NavLink className="nav-link" to="/chat">Chat</NavLink>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link className="nav-link" onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
            </Container>
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
        <Navbar className="navbar" bg="light" expand="lg">
            
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <NavLink className="nav-link" to="/">Home</NavLink>
                    {user ? userLogged() : userAnonymous()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent;