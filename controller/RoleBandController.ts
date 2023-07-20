import { Application, Request, Response } from "express";
import { RoleBandResponse } from "../model/RoleBandResponse";

const roleBandService = require('../service/RoleBandService')

module.exports = function(app: Application)
{
    app.get('/role-band-levels', async(req: Request, res: Response) =>
    {
        let data: RoleBandResponse[];

        try
        {
            data = await roleBandService.getRoleBands()
        } catch (e)
        {
            console.error(e);
        }

        res.render('list-role-band-levels', {rolebandlevels: data})
    })
}