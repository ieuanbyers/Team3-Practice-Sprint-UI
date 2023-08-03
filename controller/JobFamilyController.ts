import { Application, Request, Response } from 'express';
import { JobFamilyRequest } from '../model/jobFamilyRequest';
import { JobFamilyResponse } from '../model/jobFamilyResponse';
import { Capability } from '../model/Capability';

const jobFamilyService = require('../service/JobFamilyService');
const capabilityService = require('../service/CapabilityService');

module.exports = function(app: Application)
{
	app.get('/job-family', async(req: Request, res: Response) =>
	{
		let data: JobFamilyResponse[];

		try
		{
			data = await jobFamilyService.getJobFamilies();
		} catch (e)
		{
			console.error(e);
		}

		res.render('list-job-families', {jobfamilies: data});
	});

	app.get('/new-job-family', async(req: Request, res: Response) =>
	{
		let data: Capability[];

		try
		{
			data = await capabilityService.getCapabilities();
		} catch (e)
		{
			console.error('Unable to populate dropdown');
		}
        
		res.render('job-family-form', {capabilities: data});
	});

	app.post('/new-job-family', async (req, res) => {
		const data: JobFamilyRequest = req.body;
		try {        
			await jobFamilyService.createFamily(data);
			res.redirect('/job-family');
		} catch (e) {
			console.error(e);
			res.locals.errormessage = e.message;
			res.render('job-family-form', data);
		}
	});
};