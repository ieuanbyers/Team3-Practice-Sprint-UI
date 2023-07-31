import { Band } from '../model/band';
import { FailedToGetBandError } from '../Errors/failedToGetBandError';
import { getEnvConfig } from './configService';
import axios, { AxiosResponse } from 'axios';

module.exports.URL = '/api/bands/';

module.exports.getBandById = async function (bandId: number): Promise<Band> {
    if(!bandId){
        throw new FailedToGetBandError('Band ID does not exist');
      }
    try {
        const endpointURL = getEnvConfig().api_url + module.exports.URL;
        const response: AxiosResponse = await axios.get(endpointURL + bandId);
    
        return response.data;
    } catch (e) {
        throw new FailedToGetBandError('Could not get band');
    }
}

