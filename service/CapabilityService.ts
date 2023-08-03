import axios, { AxiosResponse } from 'axios';
import { Capability } from '../model/Capability';
import { FailedToGetCapabilitiesError } from '../Errors/FailedToGetCapabilitiesError';



module.exports.getCapabilities = async function(): Promise<Capability[]>
{
	try
	{
		const baseURL = process.env.baseURL;
		const response:AxiosResponse = await axios.get(`${baseURL}/api/capabilities`);

		return response.data;
	} catch(e)
	{
		throw new FailedToGetCapabilitiesError('Could not get capabilities');
	}
};



