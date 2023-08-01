import { JobFamilyResponse } from "../../../model/JobFamilyResponse";
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const chai = require('chai');  
const expect = chai.expect;
const jobFamilyService= require ('../../../service/JobFamilyService')

const jobFamily: JobFamilyResponse = {
  jobFamilyId: 1,
  capabilityName: "Applied Innovation",
  name: "Engineering Strategy and Planning"
}

describe('JobFamilyService', function () {
  describe('getJobFamilies', function() {
    it('should return job family info from response', async () => {

      let mock = new MockAdapter(axios);

        const data = [jobFamily];

        mock.onGet(jobFamilyService.URL).reply(200, data);

        let results = await jobFamilyService.getJobFamilies();

        expect(results[0]).to.deep.equal(jobFamily);
    })

    it('should throw exception when 500 error returned from axios', async () => {
        const mock = new MockAdapter(axios);

        mock.onGet(jobFamilyService.URL).reply(500);

        try {
          await jobFamilyService.getJobFamilies();
        } catch (error){
          expect(error.message).to.equal('Could not get job families')
        }
      })
  })
})