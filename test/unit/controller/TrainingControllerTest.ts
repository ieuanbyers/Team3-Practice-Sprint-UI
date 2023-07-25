const supertest = require('supertest');
import { app } from "../../../app";
const sinon = require('sinon');

const trainingService = require('../../../service/trainingService');

describe('TrainingController', function () {
    it('should return a 200 status code',async () => {
        const stub = sinon.stub(trainingService, "getTrainingByBand").returns({
            name: 'Test Course',
            link: 'http://localhost:3000',
            category: 'Test Category'
        });
        const bandId: number = 2;

        const response = await supertest(app)
            .get(`/view-training/${bandId}`).set('Accept', 'application/json').expect(200);
    });
});