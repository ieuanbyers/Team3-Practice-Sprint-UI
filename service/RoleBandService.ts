import { RoleBandResponse } from "../model/RoleBandResponse";

const axios = require('axios');

module.exports.getRoleBands = async function(): Promise<RoleBandResponse[]>
{
    try
    {
        const response = await axios.get('http://localhost:8080/api/role-band-levels')

        return response.data
    } catch(e)
    {
        throw new Error('Could not get role band levels')
    }
}
