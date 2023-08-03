import axios, { AxiosResponse } from 'axios';
import { JobFamilyResponse } from '../model/JobFamilyResponse';
import { FailedToGetJobFamiliesError } from '../Errors/FailedToGetJobFamilies';

module.exports.getJobFamilies = async function(): Promise<JobFamilyResponse[]>
{
	try
	{
		const baseURL = process.env.baseURL;
		const response:AxiosResponse = await axios.get(`${baseURL}/api/job-family`);

		return response.data;
	} catch(e)
	{
		throw new FailedToGetJobFamiliesError('Could not get job families');
	}
};