import { JobRole } from "../../../model/JobRole";

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');
const expect = chai.expect;
const jobRoleService = require('../../../service/JobRoleService');

const jobRole: JobRole = {

  roleId: 1,
    jobTitle: "Software Engineer",
    specLink: "https://kainossoftwareltd.sharepoint.com/people/Job%20Specifications/Forms/AllItems.aspx?id=%2Fpeople%2FJob%20Specifications%2FEngineering%2FJob%20profile%20%2D%20Software%20Engineer%20%28Trainee%29%2Epdf&parent=%2Fpeople%2FJob%20Specifications%2FEngineering&p=true&ga=1"
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
          
          try {
            var error = await jobRoleService.getJobRoles();
          } catch (error) {
            expect(error.message).to.equal('Could not get job roles')
          }
        })
    })
})