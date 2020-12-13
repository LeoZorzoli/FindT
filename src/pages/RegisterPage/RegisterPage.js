import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useField } from '../../hooks/index';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../reducers/registerReducer';

const RegisterPage = () => {
    const username = useField('text')
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
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            country: country.value,
            password: password1.value
        }

        if (password1.value === password2.value){
            if(username.value && firstName.value && lastName.value && email.value && country.value && password1.value){
                dispatch(register(userToRegister))
                history.push('/login')
            }
        }
    }
    
    return (
        <Container>
            <Form onSubmit={handleRegister} className="registerform">
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control {...username}/>
                </Form.Group>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control {...firstName} />
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control {...lastName} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control {...email} />
                </Form.Group>
                <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control {...country} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...password1} />
                </Form.Group>
                <Form.Group controlId="formPassword2">
                    <Form.Label>Repeat your password</Form.Label>
                    <Form.Control {...password2} />
                </Form.Group>
                <div className="btn-middle">
                    <Button variant="outline-primary" className="btn-user" type="submit">Register</Button>
                </div>
            </Form>
        </Container>
    )
}

export default RegisterPage