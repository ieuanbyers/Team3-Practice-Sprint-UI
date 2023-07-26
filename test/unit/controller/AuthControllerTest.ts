import supertest from "supertest";
import {app} from "../../../app";
import sinon from "sinon";

const authService = require('../../../service/authService');

describe('authController', function () {
    it('check for 200 code on get', async ()=>
    {

        const response= await supertest(app)
            .get('/login').set('Accept','application/json').expect(200);
        sinon.restore()
    })

    it('check for 302 code on post with valid login', async ()=>
    {
        const stub = sinon.stub(authService,"login").returns("token");
        const response= await supertest(app)
            .post('/login').set('Accept','application/json').expect(302);
        sinon.restore()
    })

    it('check for 200 code on post with invalid login', async ()=>
    {
        const stub = sinon.stub(authService,"login").throws(Error("could not login"));
        const response= await supertest(app)
            .post('/login').set('Accept','application/json').expect(200);
        sinon.restore()
    })
})