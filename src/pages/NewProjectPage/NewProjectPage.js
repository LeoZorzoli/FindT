import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap';
import { createProject } from '../../reducers/projectsReducer';
import { useField } from '../../hooks/index';
import { useHistory } from 'react-router-dom'

const NewProjectPage = () => {

    const name = useField('text')
    const description = useField('text')

    const user = useSelector(state => state.login)

    const dispatch = useDispatch()
    const history = useHistory()

    const createNewProject = async (event) => {
        event.preventDefault()

        const project = {
            name: name.value,
            description: description.value,
            owner: user.id
        }
        await dispatch(createProject(project))
        history.push('/projects')
    }

    return (
        <Container>
            <Form onSubmit={createNewProject}>
                <Form.Group controlId="nameProject">
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...name}/>
                </Form.Group>
                <Form.Group controlId="descriptionProject">
                    <Form.Label>Description</Form.Label>
                    <Form.Control {...description} as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit">Create</Button>
            </Form>
        </Container>
    )
}

export default NewProjectPage;