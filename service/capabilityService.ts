import { CapabilityRequest } from "../model/capabilityRequest"
const CapabilityRequestValidator = require('../validator/capabilityRequestValidator')
const axios = require('axios');
axios.defaults.baseURL = process.env.API_URL;
module.exports.URL = '/api/capabilities/'


module.exports.createCapability = async function (capabilityRequest: CapabilityRequest): Promise<number> {

    
    const error: string = CapabilityRequestValidator.validateCapabilityRequest(capabilityRequest)

        if (error) {
            throw new Error(error)
        }
    
    try {
        const response = await axios.post('http://localhost:8080/api/capabilities/', capabilityRequest)

        return response.data
    } catch (e) {
        throw new Error('Could not create capability')
    }
}