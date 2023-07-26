import axios, { AxiosResponse } from "axios";
import { Capability } from "../model/Capability";



module.exports.getCapabilities = async function(): Promise<Capability[]>
{
    try
    {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.get(`${baseURL}/api/capabilities`)

        return response.data
    } catch(e)
    {
        throw new Error('Could not get capabilities')
    }
}



