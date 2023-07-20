var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const competencyService = require('../../../service/competencyService');
const competencyRequest = {
    competencyService: "Test",
    description: "Mocha",
    bandName: "Chai",
}

describe('competencyService', function () {
    describe('getCompsWithBand', function () {
      it('should return comps associated with bandId from response', async () => {
        var mock = new MockAdapter(axios);


        mock.onGet(competencyService.URL).reply(200, data);

        var results = await competencyService.getCompsWithBand(1);

        expect(results[0]).to.deep.equal(competencyRequest)
      })

      it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onGet(competencyService.URL).reply(500);

        var error = await competencyRequest.getCompsWithBand(1)
        
        expect(error.message).to.equal('Could not get employees')
      })
    })
  })