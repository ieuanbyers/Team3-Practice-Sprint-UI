import { AxiosResponse } from "axios";
import { JobFamily } from "../model/JobFamily";

const axios = require('axios');

module.exports.getJobFamilies = async function(): Promise<JobFamily[]>
{
    try
    {
        const response:AxiosResponse = await axios.get('http://localhost:8080/api/job-family')

        return response.data
    } catch(e)
    {
        throw new Error('Could not get job families')
    }
}



