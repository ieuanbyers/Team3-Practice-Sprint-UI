import axios, {AxiosResponse} from "axios";
import {FailedToGetJobsError} from "../Errors/FailedToGetJobsError";
import { JobRoleRequest } from "../model/JobRoleRequest";

module.exports.getJobRoles = async function()
{
    try
    {
        const baseURL = process.env.baseURL
        const res:AxiosResponse = await axios.get(`${baseURL}/api/job-roles`)
        return res.data;
    } catch(e)
    {
        throw new FailedToGetJobsError('Could not get job roles')
    }
}

module.exports.createJobRole = async function(newrole: JobRoleRequest) {
    const response = await axios.post(this.URL, newrole)

    return response.data
}