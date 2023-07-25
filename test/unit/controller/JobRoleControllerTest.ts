import supertest from "supertest";
import {app} from "../../../app";
import sinon from "sinon";
import {FailedToGetJobsError} from "../../../Errors/FailedToGetJobsError";

const jobRoleService = require('../../../service/JobRoleService');

describe('JobRoleController', function () {
    it('check for FailedToGetJobsError', async ()=>
    {
        const stub = sinon.stub(jobRoleService,"getJobRoles").throws(new FailedToGetJobsError("Failed to get jobs"));

        let response= await supertest(app)
            .get('/job-roles').set('Accept','application/json');

        console.log("aa");
    })
})