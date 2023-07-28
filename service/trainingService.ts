import { AxiosResponse } from 'axios';
import { FailedToGetTrainingError } from '../Errors/failedToGetTrainingError';
import { type Training } from '../model/training'
const axios = require('axios')

axios.defaults.baseURL = process.env.API_URL;
module.exports.URL = '/api/training/';

module.exports.getTrainingByBand = async function (bandId: number): Promise<Training[]> {
  if(!bandId){
    throw new FailedToGetTrainingError('Band ID does not exist');
  }
  try {
    const endpointURL = axios.defaults.baseURL + module.exports.URL;
    const response: AxiosResponse = await axios.get(endpointURL + bandId);

    return response.data;
  } catch (e) {
    throw new FailedToGetTrainingError('Could not get training');
  }
}
