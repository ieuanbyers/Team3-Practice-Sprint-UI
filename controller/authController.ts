import {Application, Response, Request} from "express";
import {LoginRequest} from "../model/auth";

const authService = require('../service/authService')

module.exports = function (app: Application)
{
    app.get('/login', async(req: Request,res:Response)=>
    {
        res.render('login')
    })

    app.post('/login', async (req:Request,res:Response) =>
    {
        let data: LoginRequest = req.body;
        try{
            req.session.token = await authService.login(data)

            res.redirect('/job-roles')
        } catch (e)
        {
            console.error(e)
            res.locals.errormessage = e.message
            res.render('login',req.body)
        }
    })

}