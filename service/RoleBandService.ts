import { RoleBandResponse } from "../model/RoleBandResponse";
const axios = require('axios');

axios.defaults.baseURL = process.env.API_URL;

module.exports.URL='http://localhost:8080/api/role-band-levels';

module.exports.getRoleBands = async function (): Promise<RoleBandResponse> {
    try {
        const response = await axios.get(this.URL)

        return response.data
    } catch (e) {
        throw new Error('Could not get role band levels')
    }
}
