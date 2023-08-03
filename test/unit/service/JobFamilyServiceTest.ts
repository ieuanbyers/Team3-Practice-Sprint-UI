import { JobFamilyResponse } from '../../../model/jobFamilyResponse';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { JobFamilyRequest } from '../../../model/jobFamilyRequest';

const chai = require('chai');  
const expect = chai.expect;
const jobFamilyService= require ('../../../service/JobFamilyService');

const getFamily: JobFamilyResponse = {
	jobFamilyId: 1,
	capabilityName: 'Applied Innovation',
	name: 'Engineering Strategy and Planning'
};
const postFamily: JobFamilyRequest = {
	capabilityId: 1,
	name: 'Test'
};

describe('JobFamilyService', function () {
	describe('createFamily', function() {
		it('should return an id after creating a job family', async () => {
			const mock = new MockAdapter(axios);

			const id = 1;

			mock.onPost(jobFamilyService.URL).reply(201, id);

			const result = await jobFamilyService.createFamily(postFamily);

			expect(result).to.equal(id);
		});

		it('should return a 500 error after failing to create a job family', async () => {
			const mock = new MockAdapter(axios);

			mock.onPost(jobFamilyService.URL).reply(500);

			try{
				await jobFamilyService.createFamily(postFamily);
			} catch(e){
				expect(e.message).to.equal('Could not create Job Family');
			}
		});

		it('should return a 400 error after failing to create a job family', async () => {
			const mock = new MockAdapter(axios);

			mock.onPost(jobFamilyService.URL).reply(400);

			try{
				await jobFamilyService.createFamily(postFamily);
			} catch(e){
				expect(e.message).to.equal('Could not create Job Family');
			}
		});
	});

	describe('getJobFamilies', function() {
		it('should return job family info from response', async () => {

			const mock = new MockAdapter(axios);

			const data = [getFamily];

			mock.onGet(jobFamilyService.URL).reply(200, data);

			const results = await jobFamilyService.getJobFamilies();

			expect(results[0]).to.deep.equal(getFamily);
		});

		it('should throw exception when 500 error returned from axios', async () => {
			const mock = new MockAdapter(axios);

			mock.onGet(jobFamilyService.URL).reply(500);

			try {
				await jobFamilyService.getJobFamilies();
			} catch (error){
				expect(error.message).to.equal('Could not get job families');
			}
		});
	});
});