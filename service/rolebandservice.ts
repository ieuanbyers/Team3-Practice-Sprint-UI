import { roleband } from "../model/roleband";
const axios = require('axios');

const baseURL = process.env.baseURL;

module.exports.URL = `${baseURL}/api/role-band-levels`;

module.exports.getRoleBands = async function (): Promise<roleband> {
    try {
        const response = await axios.get(this.URL);
        
        return response.data
    } catch (e) {
        throw new Error('Could not get role band levels')
    }
}
