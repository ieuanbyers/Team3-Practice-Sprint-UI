import supertest from 'supertest';
import {app} from '../../../app';
import sinon, { SinonStub } from 'sinon';

const jobFamilyService = require('../../../service/JobFamilyService');

describe('JobFamilyController', function () {
	let serviceStub: SinonStub;

	before(() => {
		serviceStub = sinon.stub(jobFamilyService, 'getJobFamilies').returns( {
			jobFamilyId: 1,
			capabilityName: 'Applied Innovation',
			name: 'You dont have access'
		});
	});
	it('check for 200 code', async ()=>
	{

		await supertest(app)
			.get('/capability').set('Accept','application/json').expect(200);
	});

	after(() =>{
		serviceStub.restore();
	});
});