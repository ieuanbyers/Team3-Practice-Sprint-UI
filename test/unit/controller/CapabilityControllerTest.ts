import supertest from "supertest";
import {app} from "../../../app";
import sinon from "sinon";

const capabilityService = require('../../../service/CapabilityService');

describe('CapabilityController', function () {
    it('check for 200 code', async ()=>
    {
        const stub = sinon.stub(capabilityService,"getCapabilities").returns({
            capabilityId: 1,
            name: "Applied Innovation",
            description: "You dont have access"
        });

        const response= await supertest(app)
            .get('/capability').set('Accept','application/json').expect(200);
    })
})