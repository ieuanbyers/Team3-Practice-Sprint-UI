import { AxiosResponse } from 'axios';
import { type Band } from '../model/band'
const axios = require('axios')

axios.defaults.baseURL = process.env.API_URL;
module.exports.URL = '/api/bands/';

module.exports.getBandById = async function (bandId: number): Promise<Band> {
    try {
        const endpointURL = axios.defaults.baseURL + module.exports.URL;
        const response: AxiosResponse = await axios.get(endpointURL + bandId);
    
        return response.data;
    } catch (e) {
        throw new Error('Could not get band');
    }
}

