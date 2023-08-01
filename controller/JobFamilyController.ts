import { Application, Request, Response } from "express";
import { JobFamilyRequest } from "../model/jobFamilyRequest";
import { JobFamilyResponseRequest } from "../model/jobFamilyResponseRequest";

const jobFamilyService = require('../service/JobFamilyService')

module.exports = function(app: Application)
{
    app.get('/job-family', async(req: Request, res: Response) =>
    {
        let data: JobFamilyRequest[];

        try
        {
            data = await jobFamilyService.getJobFamilies()
        } catch (e)
        {
            console.error(e);
        }

        res.render('list-job-families', {jobfamilies: data})
    })

    app.get('/new-job-family', async(req: Request, res: Response) =>
    {
        let data: JobFamilyRequest[];

        try
        {
            data = await jobFamilyService.getJobFamilies()
        } catch (e)
        {
            console.error('Unable to populate dropdown');
        }
        
        res.render('job-family-form', {jobfamilies: data})
    })

    app.post('/new-job-family', async (req, res) => {
        let data: JobFamilyResponseRequest = req.body
        try {        
            const id:Number = await jobFamilyService.createFamily(data)
            res.redirect('/job-family')
        } catch (e) {
            console.error(e);
            res.locals.errormessage = e.message
            res.render('job-family-form', data)
        }
    });
}