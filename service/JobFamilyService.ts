import axios, { AxiosResponse } from "axios";
import { JobFamily } from "../model/JobFamily";

module.exports.getJobFamilies = async function(): Promise<JobFamily[]>
{
    try
    {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.get(`${baseURL}/api/job-family`)

        return response.data
    } catch(e)
    {
        throw new Error('Could not get job families')
    }
}



