import { CapabilityRequest } from "../model/capabilityRequest"
const CapabilityRequestValidator = require('../validator/capabilityRequestValidator')
import axios, { AxiosResponse } from "axios";

module.exports.createCapability = async function (capabilityRequest: CapabilityRequest): Promise<number> {

    
    const error: string = CapabilityRequestValidator.validateCapabilityRequest(capabilityRequest)

        if (error) {
            throw new Error(error)
        }
    
    try {
        const baseURL: string = process.env.baseURL;
        const res:AxiosResponse = await axios.get(`${baseURL}/api/competencies`)
        console.log(`${baseURL}/api/competencies`)
        return res.data;
        // const response = await axios.post('http://localhost:8080/api/capabilities/', capabilityRequest)

        // return response.data
    } catch (e) {
        throw new Error('Could not create capability')
    }
}