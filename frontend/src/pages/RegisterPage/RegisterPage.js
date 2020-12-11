import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useField } from '../../hooks/index'

const RegisterPage = () => {
    const username = useField('text')
    const firstName = useField('text')
    const lastName = useField('text')
    const password1 = useField('password')
    const password2 = useField('password')
    
    return (
        <Container>
            <Form  className="registerform">
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