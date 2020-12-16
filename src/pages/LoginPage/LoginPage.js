import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useField } from '../../hooks/index'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import { useHistory, Link } from 'react-router-dom'

import './LoginPage.scss'

const LoginPage = () => {
    const email = useField('email')
    const password = useField('password')

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogin = async (event) => {
        event.preventDefault()

        const user = {
            email: email.value,
            password: password.value
        }

        await dispatch(login(user))
        history.push('/')
    }

    return (
        <Container className="loginForm rounded">
            <Form onSubmit={handleLogin} >
                <p className="login-title">Sign in</p>
                <Form.Group controlId="formUsername">
                    <Form.Label className="login-label"><strong>Email</strong></Form.Label>
                    <Form.Control className="input-login" {...email} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className="login-label"><strong>Password</strong></Form.Label>
                    <Form.Control className="input-login" {...password} />
                </Form.Group>
                <Button className="button-login" type="submit">Login</Button>
                <Link to="/register"><Button className="button-login2" type="submit">Create an account</Button></Link>
            </Form>
        </Container>
    )
}

export default LoginPage;