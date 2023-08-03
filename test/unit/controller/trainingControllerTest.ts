import supertest from 'supertest';
import sinon, {SinonStub} from 'sinon';
import {app} from '../../../app';

const trainingService = require('../../../service/trainingService');

describe('TrainingController', function () {
	let trainingStub: SinonStub;

	before(() => {
		trainingStub = sinon.stub(trainingService, 'getTrainingByBand').returns({
			name: 'Test Course',
			link: 'http://localhost:3000',
			category: 'Test Category',
			bandName: 'Test Band'
		});
	});

	it('should return a 200 status code', async ()=> {
		const bandId: number = 2;

		await supertest(app)
			.get(`/view-training/${bandId}`).set('Accept','application/json').expect(200);
	});

	after (() =>{
		trainingStub.restore();
	});
});
