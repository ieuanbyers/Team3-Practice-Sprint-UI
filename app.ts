import express, { Request, Response } from "express";
import session from "express-session";
import path from "path";
import nunjucks from "nunjucks";

export const app = express();

const appViews = path.join(__dirname,'/views/');


const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};


nunjucks.configure(appViews,nunjucksConfig);

app.set('view engine','html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(session({ secret: 'NOT HARDCODED SECRET', cookie:{maxAge: 60000}}))

declare module "express-session" {

}

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/',  async (req:Request, res:Response) => {

})

require('./controller/competencyController')(app);
require('./controller/jobRoleController')(app);
require('./controller/CapabilityController')(app);