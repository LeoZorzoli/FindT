import projectsService  from '../services/projects';

export const getProjects = () => {
    return async dispatch => {
        const projects = await projectsService.getAll()
        dispatch({
            type: 'GET_ALL',
            data: projects
        })
    }
}

export const createProject = (projectToCreate) => {
    return async dispatch => {
        const project = await projectsService.create(projectToCreate)
        dispatch({
            type: 'CREATE',
            content: project
        })
    }
}

const projectsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL':
            return action.data
        case 'CREATE':
            return [...state, action.content]
        default:
            return state
    }
}

export default projectsReducer