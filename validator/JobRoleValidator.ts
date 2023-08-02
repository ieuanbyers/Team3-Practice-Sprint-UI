import { JobRoleRequest } from "../model/JobRoleRequest";

module.exports.validateJobRole = function (jobRoleRequest: JobRoleRequest): string {

    if (jobRoleRequest.roleTitle.length > 50) {
        return "Role Title must be under 50 characters";
    }
    if (jobRoleRequest.roleTitle.length < 5) {
        return "Role Title must be at least 5 characters";
    }
    return null;
}