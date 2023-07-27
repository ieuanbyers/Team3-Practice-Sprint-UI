import { Application, Request, Response } from "express";
import { JobRole } from "../model/JobRole";
import { Band } from "../model/Band";
import { JobFamily } from "../model/JobFamily";

const jobRoleService = require('../service/JobRoleService')
const bandService = require('../service/BandService');
const jobFamilyService = require('../service/JobFamilyService');
const jobRoleValidator = require('../validator/JobRoleValidator');

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
        let error = jobRoleValidator.validateJobRole(req.body)
    
        console.log(error)
    
        if (error) {
            res.locals.errormessage = error
            return res.render('role-form', req.body)
        }
    
        try {        
            const id = await jobRoleService.createJobRole(req.body)
        } catch (e) {
            res.locals.errormessage = "Failed to submit form"
            res.render('role-form', req.body)
        }
    });
}