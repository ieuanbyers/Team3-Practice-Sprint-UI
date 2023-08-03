import { Application, Request, Response } from "express";
import { Band } from "../model/Band";
import { JobFamily } from "../model/JobFamily";
import { JobRoleRequest } from "../model/JobRoleRequest";
import { JobRoleResponse } from "../model/JobRoleResponse";

const jobRoleService = require('../service/JobRoleService')
const bandService = require('../service/BandService');
const jobFamilyService = require('../service/JobFamilyService');
const jobRoleValidator = require('../validator/JobRoleValidator');

module.exports = function(app: Application)
{
    app.get('/job-roles', async(req: Request, res: Response) =>
    {
        let jobRoles: JobRoleResponse[];
        try
        {
            jobRoles = await jobRoleService.getJobRoles()
        } catch (e)
        {
            console.error(e.message);
        }
        res.render('list-job-roles', {jobroles: jobRoles})
    })

    app.get('/new-job-role', async(req: Request, res: Response) => {
        let Bands: Band[] = [];
        let jobFamilies: JobFamily[] = [];

            Bands = await bandService.getAllBands();
            jobFamilies = await jobFamilyService.getJobFamilies();

        res.render('role-form', {bands: Bands, jobfamilies: jobFamilies})
    })

    app.post('/new-job-role', async (req, res) => {
        let data: JobRoleRequest = req.body
        try {        
            const id:Number = await jobRoleService.createJobRole(data)
            res.redirect('/job-roles')
        } catch (e) {
            let Bands: Band[] = [];
            let jobFamilies: JobFamily[] = [];
            Bands = await bandService.getAllBands();
            jobFamilies = await jobFamilyService.getJobFamilies();
            console.error(e);
            res.locals.errormessage = e.message
            res.render('role-form', {data, bands: Bands, jobfamilies: jobFamilies});
        }
    });
}
