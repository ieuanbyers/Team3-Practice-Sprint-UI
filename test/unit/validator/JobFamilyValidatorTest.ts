import { JobFamilyRequest } from "../../../model/jobFamilyRequest";

var chai = require('chai');
const jobFamilyRequestValidator = require('../../../validator/JobFamilyRequestValidator');
const expect = chai.expect;
describe('JobRoleValidator', function () {
    describe('validateJobRole', function () {
        it('should return null when no errors', () => {
            let testData: JobFamilyRequest = {
                capabilityId: 1,
                name: "test"
            }

            expect(jobFamilyRequestValidator.validateJobFamilyRequest(testData)).to.be.null
        })

        it('should return error when role title is more than 50 characters', () => {
            let testData: JobFamilyRequest = {
                capabilityId: 1,
                name: "Test".repeat(500)
            }
            expect(jobFamilyRequestValidator.validateJobFamilyRequest(testData)).to.equal("Name greater than 50 characters")
        })
    })
})