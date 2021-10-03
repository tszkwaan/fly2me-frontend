import axios from 'axios'
const config = require('../../config/config.json')

const getMyFlightList = async (listType: 'future' | 'history') => {
    return axios.get(`${config.mockApiEndpoint}flights/${listType}`)
}

export default {
    getMyFlightList
}