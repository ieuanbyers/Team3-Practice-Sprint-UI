import { Application, Request, Response } from 'express';
import { Capability } from '../model/capability';

const capabilityService = require('../service/CapabilityService');

module.exports = function(app: Application)
{
	app.get('/capability', async(req: Request, res: Response) =>
	{
		let data: Capability[] = [];

		try
		{
			data = await capabilityService.getCapabilities();
		} catch (e)
		{
			console.error(e);
		}

		res.render('list-capabilities', {capabilities: data});
	});

};