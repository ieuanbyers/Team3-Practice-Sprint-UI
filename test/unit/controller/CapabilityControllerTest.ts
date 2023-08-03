import supertest from 'supertest';
import {app} from '../../../app';
import sinon, { SinonStub } from 'sinon';

const capabilityService = require('../../../service/CapabilityService');

describe('CapabilityController', function () {
	let serviceStub: SinonStub;

	before(() => {
		serviceStub = sinon.stub(capabilityService, 'getCapabilities').returns( {
			capabilityId: 1,
			name: 'Applied Innovation',
			description: 'You dont have access'

		});
	}
	);
	it('check for 200 code when successful return of list of capabilities', async ()=>
	{
		await supertest(app)
			.get('/capability').set('Accept','application/json').expect(200);
	});

	after (() =>{
		serviceStub.restore();
	});
});