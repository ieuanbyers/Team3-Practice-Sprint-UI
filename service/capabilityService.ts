import { CapabilityRequest } from "../model/capabilityRequest";
import axios, { AxiosResponse } from "axios";
const CapabilityRequestValidator = require('../validator/capabilityRequestValidator')

module.exports.createCapability = async function (capabilityRequest: CapabilityRequest): Promise<number> {
    const error: string = CapabilityRequestValidator.validateCapabilityRequest(capabilityRequest)

        if (error) {
            throw new Error(error)
        }
    
    try {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.post(`${baseURL}/api/capabilities`, capabilityRequest)

        return response.data
    } catch (e) {
        throw new Error('Could not create capability')
    }
}