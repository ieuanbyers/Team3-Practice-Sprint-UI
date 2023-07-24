import {JobRole} from "../../../model/JobRole";
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');
const expect = chai.expect;
const jobRoleService = require('../../../service/JobRoleService');

const jobRole: JobRole = {
    roleId: 1,
    jobTitle: "Software Engineer",
    jobRoleFamilyId: 1
}

describe('JobRoleService', function () {
    describe('getJobRoles', function () {
        it('should return job roles info from response', async () => {
            let mock = new MockAdapter(axios);

            const data = [jobRole];

            mock.onGet(jobRoleService.URL).reply(200, data);

            let results = await jobRoleService.getJobRoles();

            expect(results[0]).to.deep.equal(jobRole);
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
})