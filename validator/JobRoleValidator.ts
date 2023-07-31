import { JobRoleRequest } from "../model/JobRoleRequest";

module.exports.validateJobRole = function (jobRoleRequest: JobRoleRequest): string {

    if (jobRoleRequest.roleTitle.length > 50) {
        return "Role Title must be under 50 characters";
    }
    return null
}