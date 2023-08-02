import supertest from "supertest";
import {app} from "../../../app";
import sinon, { SinonStub } from "sinon";

const jobRoleService = require('../../../service/JobRoleService');

describe('JobRoleController', function () {
    let serviceStub: SinonStub;

    before(() => {
        serviceStub = sinon.stub(jobRoleService, "getJobRoles").returns( {
            roleId: 1,
            roleTitle: "Applied Innovation",
            bandId: 1,
            bandName: "Trainee",
            jobFamilyName: "Engineering",
            capabilityName: "Engineering"
        });
    }
    )
    it('check for 200 code', async ()=>
    {
        await supertest(app)
        .get('/job-roles').set('Accept','application/json').expect(200);
    })

    after (() =>{
        serviceStub.restore();
    })
})