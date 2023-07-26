import { Capability } from "../../../model/Capability";
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

var chai = require('chai');  
const expect = chai.expect;
const capabilityService= require ('../../../Service/CapabilityService')

const capability: Capability = {
  capabilityId: 1,
    name: "Applied Innovation",
    description: "You don't have access"
}

describe('CapabilityService', function () {
  describe('getCapabilities', function() {
    it('should return capability info from response', async () => {

      let mock = new MockAdapter(axios);

        const data = [capability];

        mock.onGet(capabilityService.URL).reply(200, data);

        let results = await capabilityService.getCapabilities();

        expect(results[0]).to.deep.equal(data[0]);
    })

    it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onGet(capabilityService.URL).reply(500);

        try {
          var error = await capabilityService.getCapabilities();
        } catch (error){
          expect(error.message).to.equal('Could not get capabilities')
        }
      })
  })
})