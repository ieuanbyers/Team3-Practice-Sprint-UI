import axios, { AxiosResponse } from "axios";
import { JobFamily } from "../model/jobFamily";
import { FailedToGetJobsError } from "../Errors/FailedToGetJobsError";
import { FailedToGetJobFamiliesError } from "../Errors/FailedToGetJobFamilies";
import { JobFamilyRequest } from "../model/jobFamilyRequest";
import { jobFamilyRequestValidator } from "../validator/jobFamilyRequestValidator"

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

module.exports.createFamily = async function (JobFamilyRequest: JobFamilyRequest): Promise<number> {
    const error: string = jobFamilyRequestValidator.validateCapabilityRequest(JobFamilyRequest)

        if (error) {
            throw new Error(error)
        }

    try {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.post(`${baseURL}/api/job-family`, JobFamilyRequest)

        return response.data
    } catch (e) {
        throw new Error('Could not create Job Family')
    }
}



