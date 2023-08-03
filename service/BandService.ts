import axios, {AxiosResponse} from "axios";

module.exports.getAllBands = async function()
{
    try
    {
        const baseURL = process.env.baseURL
        const res:AxiosResponse = await axios.get(`${baseURL}/api/bands`)
        return res.data;
    } catch(e)
    {
        console.error('Failed to get bands')
    }
}