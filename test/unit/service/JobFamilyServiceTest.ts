import { JobFamily } from "../../../model/JobFamily";
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

var chai = require('chai');  
const expect = chai.expect;
const jobFamilyService= require ('../../../service/JobFamilyService')

const jobFamily: JobFamily = {
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

        expect(results).to.deep.equal(data[0]);
    })

    it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onGet(jobFamilyService.URL).reply(500);

        try {
          var error = await jobFamilyService.getJobFamilies();
        } catch (error){
          expect(error.message).to.equal('Could not get job families')
        }
      })
  })
})