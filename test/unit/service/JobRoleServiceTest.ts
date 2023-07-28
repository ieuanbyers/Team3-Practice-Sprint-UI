import {JobRoleResponse} from "../../../model/JobRoleResponse";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
var chai = require('chai');
const expect = chai.expect;
const jobRoleService = require('../../../service/JobRoleService');

const testData: JobRoleResponse = {
    roleId: 1,
    roleTitle: "Software Engineer",
    bandName: "Trainee",
    jobFamilyName: "Engineering",
    capabilityName: "Engineering"
}

describe('JobRoleService', function () {
        it('should return job roles info from response', async () => {
            let mock = new MockAdapter(axios);

            const data = [testData];

            mock.onGet(jobRoleService.URL).reply(200, data);

            let results = await jobRoleService.getJobRoles();

            expect(results[0]).to.deep.equal(testData);
        })

        it('should throw exception when 500 error returned from axios', async () => {
            let mock = new MockAdapter(axios);

            mock.onGet(jobRoleService.URL).reply(500);

            try
            {
                await jobRoleService.getJobRoles();
            } catch (e)
            {
                expect(e.message).to.equal('Could not get job roles')
            }
        })
})
