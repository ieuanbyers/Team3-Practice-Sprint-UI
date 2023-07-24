import {AxiosResponse} from "axios";
import {FailedToGetJobsError} from "../Errors/FailedToGetJobsError";

const axios = require('axios');

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