import { Application, Request, Response } from "express";
import { JobRole } from "../model/JobRole";

const jobRoleService = require('../service/JobRoleService')

module.exports = function(app: Application)
{
    app.get('/job-roles', async(req: Request, res: Response) =>
    {
        let data: JobRole[];

        try
        {
            data = await jobRoleService.getJobRoles()
        } catch (e)
        {
            console.error(e);
        }

        res.render('list-job-roles', {jobroles: data})
    })

}