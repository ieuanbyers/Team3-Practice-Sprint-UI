import { Application, Request, Response } from 'express';
import { JobFamilyResponse } from '../model/JobFamilyResponse';

const jobFamilyService = require('../service/JobFamilyService');

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

};