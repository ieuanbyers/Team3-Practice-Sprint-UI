import axios, {AxiosResponse} from 'axios';

module.exports.getJobFamilies = async function()
{
	try
	{
		const baseURL = process.env.baseURL;
		const res:AxiosResponse = await axios.get(`${baseURL}/api/job-family`);
		return res.data;
	} catch(e)
	{
		console.error('Failed to get job families');
	}
};