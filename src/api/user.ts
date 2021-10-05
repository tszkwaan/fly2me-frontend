import axios from 'axios'
const config = require('../../config/config.json')

const login = async () => {
    return axios.post(`${config.mockApiEndpoint}user/login`)
}

export default {
    login,
}
