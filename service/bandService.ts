import { AxiosResponse } from 'axios';
import { type Band } from '../model/band'
import { FailedToGetBandError } from '../Errors/failedToGetBandError';
import { getEnvConfig } from './configService';
const axios = require('axios')

module.exports.URL = '/api/bands/';

module.exports.getBandById = async function (bandId: number): Promise<Band> {
    try {
        const endpointURL = getEnvConfig().api_url + module.exports.URL;
        const response: AxiosResponse = await axios.get(endpointURL + bandId);
    
        return response.data;
    } catch (e) {
        throw new FailedToGetBandError('Could not get band');
    }
}

