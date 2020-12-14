import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useField } from '../../hooks/index'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import { useHistory } from 'react-router-dom'

import './LoginPage.css'

const LoginPage = () => {
    const username = useField('text')
    const password = useField('password')

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogin = async (event) => {
        event.preventDefault()

        const user = {
            username: username.value,
            password: password.value
        }

        await dispatch(login(user))
        history.push('/')
    }

    return (
        <Container className="loginForm">
            <Form onSubmit={handleLogin} >
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" {...username} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Password" {...password} />
                </Form.Group>
                <Button variant="outline-primary" id='login-button' type="submit">Login</Button>
            </Form>
        </Container>
    )
}

export default LoginPage;