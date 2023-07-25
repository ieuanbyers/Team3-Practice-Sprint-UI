import { Application, Response, Request } from "express";
import { CapabilityRequest } from "../model/capabilityRequestlower";


const CapabilityService = require('../service/CapabilityService')

module.exports = function(app: Application) {

    app.get('/add-capability', async (req: Request, res: Response) => {
        res.render('add-capability')
    })

    app.post('/add-capability', async (req: Request, res: Response) => {
        let data: CapabilityRequest = req.body
        let id: Number

        try {
            id = await CapabilityService.createCapability(data)

            res.redirect('/index')
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message

            res.render('add-capabilty', req.body)
        }
    }) 
}