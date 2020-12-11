import loginService from '../services/login';

const loggedInUserJSON = JSON.parse(
    window.localStorage.getItem('loggedUser')
)

const initialState = loggedInUserJSON ? loggedInUserJSON : null;

export const login = (userToLogin) => {
    return async dispatch => {
        const user = await loginService.login(userToLogin)
        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.data
        case 'LOGOUT':
            return null
        default:
            return state
    }
}

export default loginReducer