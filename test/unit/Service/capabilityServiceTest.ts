import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CapabilityRequest } from "../../../model/capabilityRequest";
var chai = require('chai');
const expects = chai.expect;
const capabilityService = require('../../../service/capabilityService');
const capabilityRequest: CapabilityRequest = {
    name: "Chai",
    description: "Mocha",
}

describe('capabilityService', function () {
    describe('createEmployee', function () {
        it('should return an id after creating an employee', async () => {
            var mock = new MockAdapter(axios);

            const id = 1;

            mock.onPost(capabilityService.URL).reply(201, id);

            var result = await capabilityService.createCapability(capabilityRequest);
        
            expects(result).to.equal(id);
        })

        it('should return a 500 error after failing to create an employee', async () => {
            var mock = new MockAdapter(axios);

            mock.onPost(capabilityService.URL).reply(500);

            try{
                let result = await capabilityService.createCapability(capabilityRequest);
            } catch(e){
                expects(e.message).to.equal('Could not create capability');
            }
        })

        it('should return a 400 error after failing to create an employee', async () => {
            var mock = new MockAdapter(axios);

            mock.onPost(capabilityService.URL).reply(400);

            try{
                let result = await capabilityService.createCapability(capabilityRequest);
            } catch(e){
                expects(e.message).to.equal('Could not create capability');
            }
        })
    })
})