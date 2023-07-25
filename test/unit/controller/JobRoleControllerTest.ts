import supertest from "supertest";
import {app} from "../../../app";
import sinon from "sinon";

const jobRoleService = require('../../../service/JobRoleService');

describe('JobRoleController', function () {
    it('check for 200 code', async ()=>
    {
        const stub = sinon.stub(jobRoleService,"getJobRoles").returns({
            roleId: 1,
            jobTitle: "Software Engineer",
            jobRoleFamilyId: 1
        });

        const response= await supertest(app)
            .get('/job-roles').set('Accept','application/json').expect(200);
    })
})