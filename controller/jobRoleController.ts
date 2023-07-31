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

        try{
            Bands = await bandService.getAllBands();
            jobFamilies = await jobFamilyService.getJobFamilies();
        } catch(e) {
            console.error('Unable to populate dropdowns')
        }

        res.render('role-form', {bands: Bands, jobfamilies: jobFamilies})
    })

    app.post('/new-job-role', async (req, res) => {
        let data: JobRoleRequest = req.body
        try {        
            const id:Number = await jobRoleService.createJobRole(data)
            res.redirect('/job-roles')
        } catch (e) {
            console.error(e);
            res.locals.errormessage = e.message
            res.render('add-capabilty', data)
        }
    });
}