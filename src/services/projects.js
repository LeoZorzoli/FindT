import axios from 'axios';
const baseUrl = '/api/projects';

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async projectToCreate => {
    const config = {
        headers: { Authorization: token }
    }

    const response = await axios.post(baseUrl, projectToCreate, config)
    return response.data
}

export default { getAll, create, setToken }