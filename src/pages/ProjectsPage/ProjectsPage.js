import React from 'react'
import { useSelector } from 'react-redux'

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
        <div>
            {projects.map(project => <Project key={project.id} project={project} /> )}
        </div>
    )
}

export default ProjectsPage