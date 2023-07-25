import supertest from "supertest";
import { app } from "../../../app";
import sinon, { SinonStub } from "sinon";

const roleBandService = require('../../../service/rolebandservice.ts');

describe('rolebandcontroller', function () {
    let serviceStub: SinonStub;

    before(() => {
        serviceStub = sinon.stub(roleBandService, "getRoleBands").returns({
            roleId: 1,
            bandId: 1,
            roleTitle: "Software Engineer",
            bandName: "Associate"
        });
    })

    it('should return http code 200 when successfully gets a list of rolebands', async ()=>
    {
        await supertest(app)
            .get('/role-band-levels').set('Accept','application/json').expect(200);
    })

    after(() => {
        serviceStub.restore();
    })
})