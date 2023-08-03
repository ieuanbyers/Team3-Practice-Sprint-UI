import axios, {AxiosResponse} from "axios";
import {FailedToGetJobsError} from "../Errors/FailedToGetJobsError";
import { JobRoleRequest } from "../model/JobRoleRequest";

const jobRoleValidator = require("../validator/JobRoleValidator");

const baseURL = process.env.baseURL
module.exports.URL=baseURL;

module.exports.getJobRoles = async function()
{
    try
    {
        
        const res:AxiosResponse = await axios.get(`${baseURL}/api/job-roles`)
        return res.data;
    } catch(e)
    {
        throw new FailedToGetJobsError('Could not get job roles')
    }
}

module.exports.createJobRole = async function(newrole: JobRoleRequest): Promise<number> {
    const error:string = jobRoleValidator.validateJobRole(newrole);

    if(error) {
        throw new Error(error);
    }

    try {
        const res:AxiosResponse = await axios.post(`${baseURL}/api/job-roles`, newrole)
        return res.data
    } catch(e) {
        throw new Error('Could not create role');
    }
    
}
