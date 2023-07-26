import { Application } from "express";
import { Response } from "express";
import { Request } from "express";
import { CompetencyRequest } from "../model/competencyRequest";
const competencyService = require('../service/competencyService')

module.exports = function(app: Application) {

    app.get('/list-comps/:id', async (req: Request, res: Response) => {
        let data: CompetencyRequest[];

        try {
            data = await competencyService.getCompsWithBand(req.params.id)
        } catch (e) {
            console.error(e);
        }

        res.render('list-comps', { competencyRequest: data })
    })
}