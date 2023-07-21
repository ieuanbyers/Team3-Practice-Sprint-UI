import { type Training } from '../model/Training'

const axios = require('axios')

module.exports.getTrainingByBand = async function (bandId: number): Promise<Training[]> {
  if(!bandId){
    throw new Error('BandID does not exist');
  }
  try {
    const response = await axios.get('http://localhost:8080/api/training/' + bandId);

    return response.data;
  } catch (e) {
    throw new Error('Could not get training courses');
  }
}