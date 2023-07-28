import { Application, Request, Response } from "express";
import { JobRoleResponse } from "../model/JobRoleResponse";

const jobRoleService = require('../service/JobRoleService');
const roleBandService = require('../service/rolebandservice');

module.exports = function(app: Application)
{
    app.get('/job-roles', async(req: Request, res: Response) =>
    {
        let jobRoleResponse: JobRoleResponse[];

        try
        {
            jobRoleResponse = await jobRoleService.getJobRoles()
        } catch (e)
        {
            console.error(e);
        }

        res.render('list-job-roles', {jobroles: jobRoleResponse})
    })

}