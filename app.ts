import { Request } from 'express';
import { Response } from 'express';
import { roleband } from './model/roleband';
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const res = require('express/lib/response');
const session = require('express-session');

export const app = express();

const appViews = path.join(__dirname, '/views/')

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(session({secret: 'NOT HARDCODED SECRET', cookie: {maxAge: 60000}}));

declare module "express-session" {
    interface SessionData {
        roleBandResponse: roleband
    }
}

app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});

app.get('/', (req: Request, res: Response) => {
    res.render('index', {
        title: 'Welcome to not-Kainos',
    });
}); 

require ('./controller/RoleBandController')(app);