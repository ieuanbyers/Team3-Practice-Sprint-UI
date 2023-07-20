import { CompetencyRequest } from "../model/competencyRequest";
const axios = require('axios');

module.exports.getCompsWithBand = async function (id: number): Promise<CompetencyRequest[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/competencies/' + id)

        return response.data
    } catch (e) {
        throw new Error('Could not get competencies')
    }
}