import { AxiosResponse } from 'axios';
import { FailedToGetTrainingError } from '../Errors/failedToGetTrainingError';
import { type Training } from '../model/training'
import { getEnvConfig } from './configService';
const axios = require('axios')

module.exports.URL = '/api/training/';

module.exports.getTrainingByBand = async function (bandId: number): Promise<Training[]> {
  if(!bandId){
    throw new FailedToGetTrainingError('Band ID does not exist');
  }
  try {
    const endpointURL = getEnvConfig().api_url + this.URL;
    const response: AxiosResponse = await axios.get(endpointURL + bandId);

    return response.data;
  } catch (e) {
    throw new FailedToGetTrainingError('Could not get training');
  }
}
