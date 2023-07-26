import supertest from "supertest";
import { app } from "../../../app";
import sinon, { SinonStub } from "sinon";

const competencyService = require('../../../service/competencyService');

describe('competecnyController', function () {
    let serviceStub: SinonStub;
    let bandId: number = 1;

    before(() => {
        serviceStub = sinon.stub(competencyService, "getCompsWithBand").returns({
            competencyName: "Test",
            description: "Testing",
            bandName: "You guessed it, testing",
        });
    })

    it('should return http code 200 when successfully gets a list of comps', async ()=>
    {
        await supertest(app)
            .get('/list-comps/' + bandId).set('Accept','application/json').expect(200);
    })

    after(() => {
        serviceStub.restore();
    })
})