import supertest from "supertest";
import sinon, {SinonStub} from "sinon";
import {app} from "../../../app";

const trainingService = require('../../../service/trainingService');
const bandService = require('../../../service/bandService');

describe('TrainingController', function () {
    let trainingStub: SinonStub;
    let bandStub: SinonStub;

    before(() => {
        trainingStub = sinon.stub(trainingService, "getTrainingByBand").returns({
            name: 'Test Course',
            link: 'http://localhost:3000',
            category: 'Test Category'
        });
        bandStub = sinon.stub(bandService, "getBandById").returns({
            bandId: 1,
            name: 'Test Band'
        });
    });

    it('should return a 200 status code', async ()=> {
        const bandId: number = 2;

        await supertest(app)
            .get(`/view-training/${bandId}`).set('Accept','application/json').expect(200);
    });

    after (() =>{
        trainingStub.restore();
        bandStub.restore();
    });
});
