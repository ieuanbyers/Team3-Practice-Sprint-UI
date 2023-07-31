import axios, {AxiosResponse} from "axios";
import {FailedToGetJobsError} from "../Errors/FailedToGetJobsError";
import { JobRoleRequest } from "../model/JobRoleRequest";

const jobRoleValidator = require("../validator/JobRoleValidator");

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
    const error:string = jobRoleValidator.validateJobRole(newrole);

    if(error) {
        throw new Error(error);
    }

    try {
        const baseURL = process.env.baseURL
        const res:AxiosResponse = await axios.post(`${baseURL}/api/job-roles`, newrole)
        return res.data
    } catch(e) {
        throw new Error('Could not create role');
    }
    
}