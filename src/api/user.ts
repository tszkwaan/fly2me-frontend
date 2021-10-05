import axios from 'axios';
import config from '../../config/config.json';

const login = async () => {
    return axios.post(`${config.mockApiEndpoint}users/login`);
};

export default {
    login,
};
