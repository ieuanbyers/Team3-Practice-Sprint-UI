import { JobRoleRequest } from "../model/JobRoleRequest";

module.exports.validateCapabilityRequest = function (jobRoleRequest: JobRoleRequest): string {

    if (jobRoleRequest.roleTitle.length < 50) {
        return "Role Title must be under 50 characters";
    }

    return null
}