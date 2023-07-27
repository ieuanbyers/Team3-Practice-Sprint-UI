import axios, {AxiosResponse} from "axios";
import { error } from "console";

module.exports.getJobFamilies = async function()
{
    try
    {
        const baseURL = process.env.baseURL
        const res:AxiosResponse = await axios.get(`${baseURL}/api/job-families`)
        return res.data;
    } catch(e)
    {
        console.error('Failed to get job families')
    }
}