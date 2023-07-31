import { type Application, type Request, type Response } from 'express'
import { type Training } from '../model/training'
import { type Band } from '../model/band'

const bandService = require('../service/bandService')
const trainingService = require('../service/trainingService')

module.exports = function (app: Application) {
  app.get('/view-training/:id', async (req: Request, res: Response) => {
    let data: Training[] = [];
    let band: Band = {};

    try {
      data = await trainingService.getTrainingByBand(req.params.id);
      band = await bandService.getBandById(req.params.id);
    } catch (e) {
      console.error(e)
    }

    res.render('view-training', { trainingCourses: data, bandLevel: band })
  })
}
