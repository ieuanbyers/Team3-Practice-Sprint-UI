import { Band } from "../../../model/band";
import axios from "axios";
const MockAdapter = require('axios-mock-adapter');
const chai = require('chai');
const expect = chai.expect;
const bandService = require('../../../service/bandService');
const band: Band = {
    bandId: 1,
    name: 'Test Course'
  };

const endpointURL = 'http://localhost:3000' + bandService.URL;

describe('BandService', function  () {
    let originalEnv: NodeJS.ProcessEnv;

    before(() => {
        originalEnv = process.env;
        process.env.API_URL = 'http://localhost:3000';
    });

    after(() => {
        process.env = originalEnv;
    });

    describe('getBandById', function () {
        it('should return band info from response', async () => {
            const mock = new MockAdapter(axios);
            const bandId: number = 1;
            let data: Band = band;

            mock.onGet(endpointURL + bandId).reply(200, data);

            let result = await bandService.getBandById(bandId);

            expect(result).to.deep.equal(band);
        });

        it('should throw exception when 500 error returned from axios', async () => {
            const mock = new MockAdapter(axios);
            const bandId: number = 1;
    
            mock.onGet(endpointURL + bandId).reply(500);
      
            try{
                let result = await bandService.getBandById(bandId);
            } catch(e){
                expect(e.message).to.equal('Could not get band');
            }
        });

        it('should not call axios when bandId is null', async () => {
            const mock = new MockAdapter(axios);
            const bandId: null = null;
      
            try{
                let result = await bandService.getBandById(bandId);
            } catch(e){
                expect(e.message).to.equal('Band ID does not exist');
            }
        });
    });
});