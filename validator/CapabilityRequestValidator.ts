import { CapabilityRequest } from "../model/CapabilityRequest";

module.exports.validateCapabilityRequest = function (capabilityRequest: CapabilityRequest): string {
    
    if (capabilityRequest.name.length < 1) {
        return "Name cannot be enpty"
    }

    if (capabilityRequest.name.length > 50) {
        return "Name greater than 50 characters";
    }

    if (capabilityRequest.description.length < 1) {
        return "Description empty";
    }

    if (capabilityRequest.description.length > 100) {
        return "Description greater thn 100 characters";
    }

    return null
}