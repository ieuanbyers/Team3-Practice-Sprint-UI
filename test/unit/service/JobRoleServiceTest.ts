import {JobRoleResponse} from "../../../model/JobRoleResponse";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { JobRoleRequest } from "../../../model/JobRoleRequest";
var chai = require('chai');
const expect = chai.expect;
const jobRoleService = require('../../../service/JobRoleService');

const postTestData: JobRoleRequest = {
    roleTitle: "Software Engineer",
    jobFamilyId: 2,
    bandId: 1
}

const getTestData: JobRoleResponse = {
    roleId: 1,
    jobTitle: "Software Engineer",
    jobRoleFamilyId: 1
}

describe('JobRoleService', function () {
  
    describe('createJobRole', function () {
      
        it('should return an id after creating a role', async () => {
            var mock = new MockAdapter(axios);

            const id = 1;

            mock.onPost(jobRoleService.URL).reply(201, id);

            var result = await jobRoleService.createJobRole(postTestData);
            console.log(result)

            expect(result).to.equal(id);
        })

        it('should return a 500 error after failing to create a role', async () => {
            var mock = new MockAdapter(axios);

            mock.onPost(jobRoleService.URL).reply(500);

            try{
                let result = await jobRoleService.createJobRole(postTestData);
            } catch(e){
                expect(e.message).to.equal('Could not create role');
            }
        })

        it('should return a 400 error after failing to create a role', async () => {
            var mock = new MockAdapter(axios);

            mock.onPost(jobRoleService.URL).reply(400);

            try{
                let result = await jobRoleService.createJobRole(postTestData);
            } catch(e){
                expect(e.message).to.equal('Could not create role');
            }
        })
    })
  
  describe('getJobRoles', function () {
    
   it('should return job roles info from response', async () => {
            let mock = new MockAdapter(axios);

            const data = [testData];

            mock.onGet(jobRoleService.URL).reply(200, data);

            let results = await jobRoleService.getJobRoles();

            expect(results[0]).to.deep.equal(getTestData);
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
