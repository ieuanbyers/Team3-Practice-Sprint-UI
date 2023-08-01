import { JobFamilyResponseRequest } from "../model/jobFamilyResponseRequest";

module.exports.validateJobFamilyRequest= function (JobFamilyResponseRequest: JobFamilyResponseRequest): string {

    if(JobFamilyResponseRequest.name.length < 1) {
        return "Name cannot be empty";
    }

    if(JobFamilyResponseRequest.name.length > 50) {
        return "Name greater than 50 characters";
    }

    return null 
}

