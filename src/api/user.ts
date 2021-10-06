import axios from 'axios';
import config from '../../config/config.json';

const apiEndpoint = `${config.mockApiEndpoint}users`;

const login = async () => {
    return axios.post(`${apiEndpoint}/login`);
};

const getAllUserList = () => {
    return axios.get(`${apiEndpoint}`);
};

export default {
    login,
    getAllUserList,
};
