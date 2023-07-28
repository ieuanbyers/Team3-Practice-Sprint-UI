import { Application, Request, Response } from "express";
import { Capability } from "../model/Capability";

const capabilityService = require('../service/CapabilityService')

module.exports = function(app: Application)
{

    app.get('/success', async (req: Request, res: Response) => {
        res.render('success')
    })

    app.get('/add-capability', async (req: Request, res: Response) => {
        res.render('add-capability')
    })

    app.post('/add-capability', async (req: Request, res: Response) => {
        let data: CapabilityRequest = req.body
        let id: Number

        try {
            id = await CapabilityService.createCapability(data)

            res.redirect('success')
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message

            res.render('add-capabilty', req.body)
        }
    }) 
    app.get('/capability', async(req: Request, res: Response) =>
    {
        let data: Capability[];

        try
        {
            data = await capabilityService.getCapabilities()
        } catch (e)
        {
            console.error(e);
        }

        res.render('list-capabilities', {capabilities: data})
    })
}