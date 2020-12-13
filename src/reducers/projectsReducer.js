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

const projectsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL':
            return action.data
        default:
            return state
    }
}

export default projectsReducer