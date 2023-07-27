import {Login} from "../model/auth";
import axios, {AxiosResponse} from "axios";
import https from "https";
const loginValidator = require("../validator/loginValidator")

module.exports.login = async function (login: Login): Promise<void> {
    const  err:string = loginValidator.validateLogin(login);

    const agent:https.Agent = new https.Agent({
        rejectUnauthorized: false,
    });

    if(err)
    {
        throw new Error(err);
    }
    try {
        const baseURL = process.env.baseURL
        const response:AxiosResponse = await axios.post(`${baseURL}/api/login`, login,{
            httpsAgent: agent,
        })

        return response.data
    } catch (e) {
        throw new Error('could not login')
    }
}