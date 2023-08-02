import { JobRoleRequest } from "../../../model/JobRoleRequest";

var chai = require('chai');
const jobRoleValidator = require('../../../validator/JobRoleValidator');
const expect = chai.expect;
describe('JobRoleValidator', function () {
    describe('validateJobRole', function () {
        it('should return null when no errors', () => {
            let testData: JobRoleRequest = {
                roleTitle: "Mocha",
                jobFamilyId: 1,
                bandId: 1
            }

            expect(jobRoleValidator.validateJobRole(testData)).to.be.null
        })

        it('should return error when role title is more than 50 characters', () => {
            let testData: JobRoleRequest = {
                roleTitle: "a".repeat(51),
                jobFamilyId: 1,
                bandId: 1
            }

            expect(jobRoleValidator.validateJobRole(testData)).to.equal("Role Title must be under 50 characters")
        })

        it('should return error when role title is less than 5 characters', () => {
            let testData: JobRoleRequest = {
                roleTitle: "a".repeat(4),
                jobFamilyId: 1,
                bandId: 1
            }

            expect(jobRoleValidator.validateJobRole(testData)).to.equal("Role Title must be at least 5 characters")
        })
    })
})