import axios, { AxiosResponse } from "axios";
import { Capability } from "../model/Capability";
import { FailedToGetCapabilitiesError } from "../Errors/FailedToGetCapabilitiesError";
import { CapabilityRequest } from "../model/CapabilityRequest";
const CapabilityRequestValidator = require('../validator/CapabilityRequestValidator');

module.exports.getCapabilities = async function(): Promise<Capability[]>
{
    try
    {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.get(`${baseURL}/api/capabilities`)

        return response.data
    } catch(e)
    {
        throw new FailedToGetCapabilitiesError('Could not get capabilities')
    }
}

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