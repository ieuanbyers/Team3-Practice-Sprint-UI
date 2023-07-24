import { Application, Request, Response } from "express";
import { JobRole } from "../model/JobRole";

const jobRoleService = require('../service/JobRoleService')

module.exports = function(app: Application)
{
    app.get('/job-roles', async(req: Request, res: Response) =>
    {
        let jobRoles: JobRole[];
        try
        {
            jobRoles = await jobRoleService.getJobRoles()
        } catch (e)
        {
            console.error(e.message);
        }
        res.render('list-job-roles', {jobroles: jobRoles})
    })
}