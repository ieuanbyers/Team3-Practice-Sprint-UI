import { Application, Request, Response } from 'express';
import { JobRoleResponse } from '../model/jobRoleResponse';

const jobRoleService = require('../service/JobRoleService');

module.exports = function(app: Application)
{
	app.get('/job-roles', async(req: Request, res: Response) =>
	{
		let jobRoles: JobRoleResponse[] = [];
		try
		{
			jobRoles = await jobRoleService.getJobRoles();
		} catch (e)
		{
			console.error(e.message);
		}
		res.render('list-job-roles', {jobroles: jobRoles});
	});
};
