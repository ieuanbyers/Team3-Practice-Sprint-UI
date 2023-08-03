import axios, { AxiosResponse } from 'axios';
import { JobFamilyResponse } from '../model/jobFamilyResponse';
import { FailedToGetJobFamiliesError } from '../Errors/FailedToGetJobFamilies';
import { JobFamilyRequest } from '../model/jobFamilyRequest';
const jobFamilyRequestValidator = require('../validator/jobFamilyRequestValidator');

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

module.exports.createFamily = async function (JobFamilyResponseRequest: JobFamilyRequest): Promise<number> {
	const error: string = jobFamilyRequestValidator.validateJobFamilyRequest(JobFamilyResponseRequest);

	if (error) {
		throw new Error(error);
	}

	try {
		const baseURL = process.env.baseURL;
		const response:AxiosResponse = await axios.post(`${baseURL}/api/job-family`, JobFamilyResponseRequest);

		return response.data;
	} catch (e) {
		throw new Error('Could not create Job Family');
	}
};