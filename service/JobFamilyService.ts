import axios, { AxiosResponse } from "axios";
import { JobFamily } from "../model/JobFamily";
import { FailedToGetJobsError } from "../Errors/FailedToGetJobsError";
import { FailedToGetJobFamiliesError } from "../Errors/FailedToGetJobFamilies";

module.exports.getJobFamilies = async function(): Promise<JobFamily[]>
{
    try
    {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.get(`${baseURL}/api/job-family`)

        return response.data
    } catch(e)
    {
        throw new FailedToGetJobFamiliesError('Could not get job families')
    }
}



