import { RoleBandResponse } from "../../../model/RoleBandResponse";

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const roleBandService = require('../../../service/RoleBandService');


const roleBand: RoleBandResponse = {
    roleId: 1,
    bandId: 1,
    roleTitle: "Software Engineer",
    bandName: "Apprentice"
}

describe('RoleBandService', function () {
    describe('getRoleBands', function () {
      it('should return role band levels from response', async () => {
        var mock = new MockAdapter(axios);

        const data = [roleBand];

        mock.onGet(roleBandService.URL).reply(200, data);

        var results = await roleBandService.getRoleBands();

        expect(results[0]).to.deep.equal(roleBand);
      })

      it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onGet(roleBandService.URL).reply(500);

        try {
          var error = await roleBandService.getRoleBands();
        } catch (error){
          expect(error.message).to.equal('Could not get role band levels')
        }
      })
    })
})