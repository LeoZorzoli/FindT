import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useField } from '../../hooks/index';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { register } from '../../reducers/registerReducer';

import './RegisterPage.scss'

const RegisterPage = () => {
    const firstName = useField('text')
    const lastName = useField('text')
    const email = useField('email')
    const country = useField('text')
    const password1 = useField('password')
    const password2 = useField('password')

    const dispatch = useDispatch()
    const history = useHistory()

    const handleRegister = async (event) => {
        event.preventDefault()

        const userToRegister = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            country: country.value,
            password: password1.value
        }

        if (password1.value === password2.value){
            if(email.value && firstName.value && lastName.value && country.value && password1.value){
                dispatch(register(userToRegister))
                history.push('/login')
            }
        }
    }
    
    return (
        <Container className="registerForm">
            <Form onSubmit={handleRegister}>
                <p className="register-title">Create an account</p>
                <Form.Group controlId="formEmail">
                    <Form.Label className="register-label"><strong>Email</strong></Form.Label>
                    <Form.Control className="input-register" {...email}/>
                </Form.Group>
                <Form.Group controlId="formFirstName">
                    <Form.Label className="register-label"><strong>First Name</strong></Form.Label>
                    <Form.Control className="input-register" {...firstName} />
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label className="register-label"><strong>Last Name</strong></Form.Label>
                    <Form.Control className="input-register" {...lastName} />
                </Form.Group>
                <Form.Group controlId="formCountry">
                    <Form.Label className="register-label"><strong>Country</strong></Form.Label>
                    <Form.Control className="input-register" {...country} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className="register-label"><strong>Password</strong></Form.Label>
                    <Form.Control className="input-register" {...password1} />
                </Form.Group>
                <Form.Group controlId="formPassword2">
                    <Form.Label className="register-label"><strong>Repeat your password</strong></Form.Label>
                    <Form.Control className="input-register" {...password2} />
                </Form.Group>
                <Button className="button-register" type="submit">Register</Button>
                <Link to="/login"><Button className="button-register2" type="submit">Already have an account?</Button></Link>
            </Form>
        </Container>
    )
}

export default RegisterPage