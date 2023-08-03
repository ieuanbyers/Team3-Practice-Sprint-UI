import { CompetencyResponse } from '../../../model/competencyResponse';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require('chai');  
const expect = chai.expect;
const competencyService = require('../../../service/competencyService');
const comp: CompetencyResponse = {
	competencyName: 'Test',
	description: 'Testing',
	bandName: 'You guessed it, testing',
};

const endpointURL = process.env.API_URL + competencyService.URL;


describe('CompetencyService', function  () {
	let originalEnv: NodeJS.ProcessEnv;

	before(() => {
		originalEnv = process.env;
		process.env.API_URL = 'http://localhost:3000';
	});

	after(() => {
		process.env = originalEnv;
	});

	describe('getCompsWithBand', function () {
		it('should return comps from response', async () => {
			const mock = new MockAdapter(axios);
			const bandId = 1;
			const data: CompetencyResponse[] = [comp];

			mock.onGet(endpointURL + bandId).reply(200, data);

			const results = await competencyService.getCompsWithBand(bandId);

			expect(results[0]).to.deep.equal(comp);
		});
	
		it('should throw exception when 500 error returned from axios', async () => {
			const mock = new MockAdapter(axios);
			const bandId: number = 1;

			mock.onGet(endpointURL + bandId).reply(500);
	
			try{
				await competencyService.getCompsWithBand(bandId);
			} catch(e){
				expect(e.message).to.equal('Could not get competencies');
			}
		});

		it('should not call axios when bandId is null', async () => {
			const bandId: number = null;

			try{
				await competencyService.getCompsWithBand(bandId);
			} catch(e){
				expect(e.message).to.equal('BandID does not exist');
			}
		});
	});
});