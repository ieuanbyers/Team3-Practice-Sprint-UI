import { CompetencyRequest } from "../../../model/competencyRequest";

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const competencyService = require('../../../service/competencyService');
const { Console } = require('console');
const comp = {
    competencyService: "Test",
    description: "Testing",
    bandName: "You guessed it, testing",
}

describe('competencyService', function () {
    describe('getCompsWithBand', function () {
      it('should return comps from response', async () => {
        const mock = new MockAdapter(axios);
        const bandId: number = 1;
        let data: CompetencyRequest[] = [comp];

        mock.onGet(competencyService.URL + bandId).reply(200, data);

        let results = await competencyService.getCompsWithBand(bandId);

        expect(results[0]).to.deep.equal(comp);
    });
      

    it('should throw exception when 500 error returned from axios', async () => {
      const mock = new MockAdapter(axios);
          const bandId: number = 1;
  
          mock.onGet(competencyService.URL + bandId).reply(500);
      
          try{
              let result = await competencyService.getCompsWithBand(bandId);
          } catch(e){
              expect(e.message).to.equal('Could not get competencies');
          }
      })

      it('should not call axios when bandId is null', async () => {
        const mock = new MockAdapter(axios);
        const bandId: number = null;
  
        try{
            let result = await competencyService.getCompsWithBand(bandId);
        } catch(e){
            expect(e.message).to.equal('BandID does not exist');
        }
      })
    })
  })