import { Capability } from '../../../model/capability';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const chai = require('chai');  
const expect = chai.expect;
const capabilityService = require ('../../../service/CapabilityService');

const capability: Capability = {
	capabilityId: 1,
	name: 'Applied Innovation',
	description: 'You dont have access'
};

describe('CapabilityService', function () {
	describe('getCapabilities', function() {
		it('should return capability info from response', async () => {
    
			const mock = new MockAdapter(axios);

			const data = [capability];

			mock.onGet(capabilityService.URL).reply(200, data);

			const results = await capabilityService.getCapabilities();

			expect(results[0]).to.deep.equal(capability);
		});

		it('should throw exception when 500 error returned from axios', async () => {
			const mock = new MockAdapter(axios);

			mock.onGet(capabilityService.URL).reply(500);

			try {
				await capabilityService.getCapabilities();
			} catch (error){
				expect(error.message).to.equal('Could not get capabilities');
			}
		});
	});
});