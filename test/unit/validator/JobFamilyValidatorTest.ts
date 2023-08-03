import { JobFamilyRequest } from '../../../model/jobFamilyRequest';

const chai = require('chai');
const jobFamilyRequestValidator = require('../../../validator/jobFamilyRequestValidator');
const expect = chai.expect;
describe('JobRoleValidator', function () {
	describe('validateJobRole', function () {
		it('should return null when no errors', () => {
			const testData: JobFamilyRequest = {
				capabilityId: 1,
				name: 'test'
			};

			expect(jobFamilyRequestValidator.validateJobFamilyRequest(testData)).to.be.null;
		});

		it('should return error when role title is more than 50 characters', () => {
			const testData: JobFamilyRequest = {
				capabilityId: 1,
				name: 'Test'.repeat(500)
			};
			expect(jobFamilyRequestValidator.validateJobFamilyRequest(testData)).to.equal('Name greater than 50 characters');
		});
	});
});