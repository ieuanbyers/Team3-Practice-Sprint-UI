import supertest from "supertest";
import {app} from "../../../app";
import sinon from "sinon";

const jobFamilyService = require('../../../service/JobFamilyService');

describe('JobFamilyController', function () {
    it('check for 200 code', async ()=>
    {
        const stub = sinon.stub(jobFamilyService,"getJobFamilies").returns({
            jobFamilyId: 1,
            capabilityName: "Applied Innovation",
            name: "You dont have access"
        });

        const response= await supertest(app)
            .get('/capability').set('Accept','application/json').expect(200);
    })
})