var chai = require('chai');
const capabilityRequestValidator = require('../../../validator/capabilityRequestValidator');
const expect = chai.expect;
describe('capabilityRequestValidator', function () {
    describe('validateCapabilityRequest', function () {
        it('should return null when no errors', () => {
            let capabilityRequest = {
                name: "Chai",
                description: "Mocha",
            }

            expect(capabilityRequestValidator.validateCapabilityRequest(capabilityRequest)).to.be.null
        })

        it('should return error when name is more than 50 characters', () => {
            let capabilityRequest = {
                name: "ChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChaiChai",
                description: "Mocha",
            }

            expect(capabilityRequestValidator.validateCapabilityRequest(capabilityRequest)).to.equal("Name greater than 50 characters")
        })

        it('should return error when description is more than 100 characters', () => {
            let capabilityRequest = {
                name: "Chai",
                description: "MochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMochaMocha",
            }

            expect(capabilityRequestValidator.validateCapabilityRequest(capabilityRequest)).to.equal("Description greater thn 100 characters")
        })

        it('should return error when name is empty', () => {
            let capabilityRequest = {
                name: "",
                description: "Mocha",
            }

            expect(capabilityRequestValidator.validateCapabilityRequest(capabilityRequest)).to.equal("Name cannot be enpty")
        })

        it('should return error when name is empty', () => {
            let capabilityRequest = {
                name: "Chai",
                description: "",
            }

            expect(capabilityRequestValidator.validateCapabilityRequest(capabilityRequest)).to.equal("Description cannot be empty")
        })
    })
})