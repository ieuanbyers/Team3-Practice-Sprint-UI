import { describe, it } from "node:test";
import { type Training } from '../../../model/Training'

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require('chai');
const expect = chai.expect;
const trainingService = require('../../../service/TrainingService');
const training = {
    name: 'Test Course',
    link: 'http://localhost:3000',
    category: 'Test Category',
  };

describe('TrainingService', function  () {
    describe('getTrainingByBand', function () {
        it('should return training courses from response', async () => {
            const mock = new MockAdapter(axios);
            const bandId: number = 1;
            let data: Training[] = [training];

            mock.onGet(trainingService.URL).reply(200, data);

            let results = await trainingService.getTrainingByBand(bandId);

            expect(results[0]).to.deep.equal(training);
        });
    });

    it('should throw exception when 500 error returned from axios', async () => {
        const mock = new MockAdapter(axios);
        const bandId: number = 1;

        mock.onGet(trainingService.URL).reply(500);
  
        const result = await trainingService.getTrainingByBand(bandId);
  
        expect(result.message).to.equal('Could not get training courses');
    });

    it('should not call axios when bandId is null', async () => {
        var mock = new MockAdapter(axios);
        const bandId: number = null;
  
        const result = await trainingService.getTrainingByBand(bandId);
  
        expect(result.message).to.equal('BandID does not exist');
    });
    
})