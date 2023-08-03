import { type Training } from '../../../model/training';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require('chai');
const expect = chai.expect;
const trainingService = require('../../../service/trainingService');
const training = {
	name: 'Test Course',
	link: 'http://localhost:3000',
	category: 'Test Category',
};

const endpointURL = 'http://localhost:3000' + trainingService.URL;

describe('TrainingService', function  () {
	let originalEnv: NodeJS.ProcessEnv;

	before(() => {
		originalEnv = process.env;
		process.env.baseURL = 'http://localhost:3000';
	});

	after(() => {
		process.env = originalEnv;
	});

	describe('getTrainingByBand', function () {
		it('should return training courses from response', async () => {
			const mock = new MockAdapter(axios);
			const bandId: number = 1;
			const data: Training[] = [training];

			mock.onGet(endpointURL + bandId).reply(200, data);

			const results = await trainingService.getTrainingByBand(bandId);

			expect(results[0]).to.deep.equal(training);
		});

		it('should throw exception when 500 error returned from axios', async () => {
			const mock = new MockAdapter(axios);
			const bandId: number = 1;
    
			mock.onGet(endpointURL + bandId).reply(500);
      
			try{
				await trainingService.getTrainingByBand(bandId);
			} catch(e){
				expect(e.message).to.equal('Could not get training');
			}
		});
    
		it('should not call axios when bandId is null', async () => {
			const bandId: null = null;
      
			try{
				await trainingService.getTrainingByBand(bandId);
			} catch(e){
				expect(e.message).to.equal('Band ID does not exist');
			}
		});
	});
});
