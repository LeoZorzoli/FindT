import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';
import projectsReducer from './reducers/projectsReducer';

const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    projects: projectsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store