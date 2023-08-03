import {LoginRequest} from '../model/auth';
import axios, {AxiosResponse} from 'axios';
import {FailedToLogin} from '../Errors/FailedToLogin';
const loginValidator = require('../validator/loginValidator');

module.exports.login = async function (login: LoginRequest): Promise<void> {
	const  err:string = loginValidator.validateLogin(login);

	if(err)
	{
		throw new FailedToLogin(err);
	}
	try {
		const baseURL = process.env.baseURL;
		const response:AxiosResponse = await axios.post(`${baseURL}/api/login`, login);

		return response.data;
	} catch (e) {
		throw new FailedToLogin('could not login');
	}
};