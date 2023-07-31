import { JobRoleRequest } from "../../../model/JobRoleRequest";

var chai = require('chai');
const jobRoleValidator = require('../../../validator/jobRoleValidator');
const expect = chai.expect;
describe('JobRoleValidator', function () {
    describe('validateJobRole', function () {
        it('should return null when no errors', () => {
            let testData: JobRoleRequest = {
                roleTitle: "Chai",
                jobFamilyId: 1,
                bandId: 1
            }

            expect(jobRoleValidator.validateJobRole(testData)).to.be.null
        })

        it('should return error when role title is more than 50 characters', () => {
            let testData: JobRoleRequest = {
                roleTitle: "ChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChai",
                jobFamilyId: 1,
                bandId: 1
            }

            expect(jobRoleValidator.validateJobRole(testData)).to.equal("Role Title must be under 50 characters")
        })
    })
})