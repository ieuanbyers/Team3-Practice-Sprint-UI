import supertest from 'supertest';
import {app} from '../../../app';
import sinon, { SinonStub } from 'sinon';

const jobRoleService = require('../../../service/JobRoleService');

describe('JobRoleController', function () {
	let postStub: SinonStub;
	let getStub: SinonStub;

	this.beforeEach(() => {
		postStub = sinon.stub(jobRoleService,'createJobRole').returns({
			roleTitle: 'Software Engineer',
			jobFamilyId: 2,
			bandId: 1
		});

		getStub = sinon.stub(jobRoleService, 'getJobRoles').returns( {
			roleId: 1,
			jobTitle: 'Applied Innovation',
			jobRoleFamilyId: 1
		});
	});

        

	it('check for 200 code on createJobRole', async ()=>
	{
		await supertest(app)
			.get('/new-job-role').set('Accept','application/json').expect(200);
	});
  
	it('check for 200 code on getJobRoles', async ()=>
	{
		await supertest(app)
			.get('/job-roles').set('Accept','application/json').expect(200);
	});


	afterEach (() =>{
		postStub.restore();
		getStub.restore();
	});
});