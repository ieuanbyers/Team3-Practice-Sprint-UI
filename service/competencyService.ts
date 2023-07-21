import { CompetencyRequest } from "../model/competencyRequest";
const axios = require('axios');
axios.defaults.baseURL = process.env.API_URL;

module.exports.URL = '/api/competencies/';



module.exports.getCompsWithBand = async function (bandId: number): Promise<CompetencyRequest[]> {
    if(!bandId){
        throw new Error('BandID does not exist');
      }
    try {
        const response = await axios.get('http://localhost:8080/api/competencies/' + bandId)

        return response.data
    } catch (e) {
        throw new Error('Could not get competencies')
    }
}