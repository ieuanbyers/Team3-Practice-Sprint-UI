import { envConfig } from '../model/envConfig';

export function getEnvConfig(): envConfig {
	return {
		base_url: process.env.baseURL
	};
}