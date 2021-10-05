import axios from 'axios';
import config from '../../config/config.json'
import { FlightInterface } from '../model/flight';

const apiEndpoint = `${config.mockApiEndpoint}flights`;

const getMyFlightList = (listType: 'future' | 'history') => {
    return axios.get(`${apiEndpoint}/${listType}`);
};

const updateFlight = (flight: FlightInterface) => {
    return axios.put(`${apiEndpoint}/update`, flight);
};

const createFlight = (flight: FlightInterface) => {
    return axios.post(`${apiEndpoint}`, flight);
};

const deleteFlight = (id: number) => {
    return axios.delete(`${apiEndpoint}/delete/${id}`);
};

export default {
    getMyFlightList,
    updateFlight,
    createFlight,
    deleteFlight,
};
