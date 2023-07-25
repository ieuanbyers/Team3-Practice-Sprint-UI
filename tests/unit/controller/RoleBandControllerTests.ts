import supertest from "supertest";
import {app} from "../../../app";
import sinon from "sinon";

const roleBandService = require('../../../service/rolebandservice');

describe('jobrolecontroller', function () {
    it('should return http code 200 when successfully gets a list of rolebands', async ()=>
    {
        const stub = sinon.stub(roleBandService,"getRoleBands").returns({
            roleId: 1,
            bandId: 1,
            roleTitle: "Software Engineer",
            bandName: "Associate"
        });

        const response= await supertest(app)
            .get('/role-band-levels').set('Accept','application/json').expect(200);
    })
})