import { CapabilityRequest } from "../model/capabilityRequestlower"
const CapabilityRequestValidator = require('../validator/capabilityRequestValidator')
const axios = require('axios');

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