import axios from 'axios';

const URL = 'http://localhost:3000/';

export const getShipments = async() => {
    return axios.get(`${URL}shipments`).then(({data}) => data);
}