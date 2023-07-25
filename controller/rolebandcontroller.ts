import { Application, Request, Response } from "express";
import { roleband } from "../model/roleband";

const roleBandService = require('../service/rolebandservice')

module.exports = function(app: Application)
{
    app.get('/role-band-levels', async(req: Request, res: Response) =>
    {
        let data: roleband[];

        try
        {
            data = await roleBandService.getRoleBands()
        } catch (e)
        {
            console.error(e);
        }

        res.render('list-role-band-levels', {roleBands: data})
    })
}
