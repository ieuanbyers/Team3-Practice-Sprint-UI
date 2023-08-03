import { envConfig } from '../model/envConfig';

export function getEnvConfig(): envConfig {
	return {
		api_url: process.env.baseURL
	};
}