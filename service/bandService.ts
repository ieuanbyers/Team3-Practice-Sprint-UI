import { AxiosResponse } from 'axios';
import { type Band } from '../model/band'
import { FailedToGetBandError } from '../Errors/failedToGetBandError';
const axios = require('axios')

axios.defaults.baseURL = process.env.API_URL;
module.exports.URL = '/api/bands/';

module.exports.getBandById = async function (bandId: number): Promise<Band> {
    try {
        const endpointURL = axios.defaults.baseURL + module.exports.URL + bandId;
        const response: AxiosResponse = await axios.get(endpointURL);
    
        return response.data;
    } catch (e) {
        throw new FailedToGetBandError('Could not get band');
    }
}

