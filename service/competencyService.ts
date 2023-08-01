import { AxiosResponse } from "axios";
import { CompetencyResponse } from "../model/competencyResponse";
import { getEnvConfig } from "./configService";
const axios = require('axios');

module.exports.URL = '/api/competencies/';

module.exports.getCompsWithBand = async function (bandId: number): Promise<CompetencyResponse[]> {
    if(!bandId){
        throw new Error('BandID does not exist');
      }
    try {
        const endpointURL = getEnvConfig().api_url + this.URL;
        const response: AxiosResponse = await axios.get(endpointURL + bandId);
        return response.data
    } catch (e) {
        throw new Error('Could not get competencies')
    }
}