import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

const Project = ({ project }) => {
    return (
        <div>
            <p>Title: {project.name}</p>
            <p>Description: {project.description}</p>
            <p>Username: {project.owner.username} - Id: {project.owner.id}</p>
        </div>
    )
}

const ProjectsPage = () => {

    const projects = useSelector(state => state.projects)

    return (
        <Container>
            {projects.map(project => <Project key={project.id} project={project} /> )}
        </Container>
    )
}

export default ProjectsPage