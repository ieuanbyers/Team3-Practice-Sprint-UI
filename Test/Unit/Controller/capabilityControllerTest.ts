import supertest from "supertest";
import { app } from "../../../app";
import sinon, {  SinonStub } from "sinon";

const capabilityService = require('../../../service/capabilityService');

describe('competecnyController', function () {
    let serviceStub: SinonStub;

    before(() => {
        serviceStub = sinon.stub(capabilityService, "createCapability").returns({
            name: "Test",
            description: "Testing",
        });
    })

    it('should return http code 200 when successfully creates capability', async ()=>
    {
        await supertest(app)
            .get('/add-capability').set('Accept','application/json').expect(200);
    })

    after(() => {
        serviceStub.restore();
    })
})