import axios, { AxiosResponse } from "axios";
import { JobFamilyRequest } from "../model/JobFamilyRequest";
import { FailedToGetJobsError } from "../Errors/FailedToGetJobsError";
import { FailedToGetJobFamiliesError } from "../Errors/FailedToGetJobFamilies";
import { JobFamilyResponseRequest } from "../model/jobFamilyResponseRequest";
const jobFamilyRequestValidator = require("../validator/jobFamilyRequestValidator")

module.exports.getJobFamilies = async function(): Promise<JobFamilyRequest[]>
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

module.exports.createFamily = async function (JobFamilyResponseRequest: JobFamilyResponseRequest): Promise<number> {
    const error: string = jobFamilyRequestValidator.validateJobFamilyRequest(JobFamilyResponseRequest)

        if (error) {
            throw new Error(error)
        }

    try {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.post(`${baseURL}/api/job-family`, JobFamilyResponseRequest)

        return response.data
    } catch (e) {
        throw new Error('Could not create Job Family')
    }
}