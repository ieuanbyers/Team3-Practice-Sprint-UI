import supertest from 'supertest';
import {app} from '../../../app';
import sinon, { SinonStub } from 'sinon';

const jobFamilyService = require('../../../service/JobFamilyService');

describe('JobFamilyController', function () {
	let postStub: SinonStub;
	let getStub: SinonStub;

	this.beforeEach(() => {
		postStub = sinon.stub(jobFamilyService, 'createFamily').returns({
			capabilityName: 'Applied Innovation',
			name: 'test'
		});
		getStub = sinon.stub(jobFamilyService, 'getJobFamilies').returns( {
			jobFamilyID: 1,
			capabilityName: 'Applied Innovation',
			name: 'You dont have access'

		});
	});

	it('should return http code 200 when successfully creates job family', async ()=>
	{
		await supertest(app)
			.get('/new-job-family').set('Accept','application/json').expect(200);
	});

	it('check for 200 code on getJobFamily', async ()=>
	{
		await supertest(app)
			.get('/job-family').set('Accept','application/json').expect(200);
	});

	afterEach (() =>{
		postStub.restore();
		getStub.restore();
	});
});