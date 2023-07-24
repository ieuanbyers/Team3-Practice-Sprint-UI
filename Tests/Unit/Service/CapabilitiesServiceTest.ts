

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const capabilityService= require ('../../../Service/CapabilityService')

describe('CapabilityService', function () {
describe('getCapabilities', function() {
    it('should return list of capabilities from response', async () => {

        var mock = new MockAdapter(axios)

        

        mock.onGet(capabilityService.URL).reply(200);

        var results = await capabilityService.getCapabilities();

        expect(results).to.deep.equal(200);

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
} )