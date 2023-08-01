import { JobFamilyResponseRequest } from "../model/jobFamilyResponseRequest";

module.exports.validateJobFamilyRequest= function (JobFamilyRequest: JobFamilyResponseRequest): string {

    if(JobFamilyRequest.name.length < 1) {
        return "Name cannot be empty";
    }

    if(JobFamilyRequest.name.length > 50) {
        return "Name greater than 50 characters";
    }

    return null 
}

