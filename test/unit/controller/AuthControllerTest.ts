import supertest from "supertest";
import {app} from "../../../app";
import sinon, {SinonStub} from "sinon";

const authService = require('../../../service/authService');

describe('authController', function () {
    let stub: SinonStub;
    it('check for 200 code on get', async ()=>
    {
        const response= await supertest(app)
            .get('/login').set('Accept','application/json').expect(200);
        sinon.restore()
    })

    it('check for 302 code on post with valid login', async ()=>
    {
        stub = sinon.stub(authService,"login").returns("token");
        const response= await supertest(app)
            .post('/login').set('Accept','application/json').expect(302);
    })

    it('check for 200 code on post with invalid login', async ()=>
    {
        stub = sinon.stub(authService,"login").throws(Error("could not login"));
        const response= await supertest(app)
            .post('/login').set('Accept','application/json').expect(200);
    })
    afterEach (() =>{
        sinon.restore();
    })
})