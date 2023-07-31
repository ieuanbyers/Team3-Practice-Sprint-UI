import supertest from "supertest";
import {app} from "../../../app";
import sinon, { SinonStub } from "sinon";

const jobRoleService = require('../../../service/JobRoleService');

describe('JobRoleController', function () {
    let stub: SinonStub;

    before(() => { 
        stub = sinon.stub(jobRoleService,"createJobRole").returns({
            roleTitle: "Software Engineer",
            jobFamilyId: 2,
            bandId: 1
        });
    })

    it('check for 200 code', async ()=>
    {
        const response= await supertest(app)
            .get('/new-job-role').set('Accept','application/json').expect(200);
    })

    after(() => {
        stub.restore();
    })
})