import { Application } from 'express';
import { Response } from 'express';
import { Request } from 'express';
import { CompetencyResponse } from '../model/competencyResponse';
const competencyService = require('../service/competencyService');

module.exports = function(app: Application) {

	app.get('/list-comps/:id', async (req: Request, res: Response) => {
		let data: CompetencyResponse[];

		try {
			data = await competencyService.getCompsWithBand(req.params.id);
		} catch (e) {
			console.error(e);
		}

		res.render('list-comps', { competencies: data });
	});
};