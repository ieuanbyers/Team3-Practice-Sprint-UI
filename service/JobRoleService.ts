import { JobRole } from "../model/JobRole";

const axios = require('axios');

module.exports.getJobRoles = async function()
{
    try
    {
        const response = await axios.get('http://localhost:8080/api/job-roles')

        return response.data
    } catch(e)
    {
        return new Error('Could not get job roles')
    }
}