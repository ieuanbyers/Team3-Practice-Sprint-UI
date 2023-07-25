import { RoleBandResponse } from "../model/RoleBandResponse";
const axios = require('axios');

axios.defaults.baseURL = process.env.API_URL;

module.exports.getRoleBands = async function (): Promise<RoleBandResponse> {
    try {
        const response = await axios.get(`${this.baseURL}/api/role-band-levels`)
        
        return response.data
    } catch (e) {
        throw new Error('Could not get role band levels')
    }
}
