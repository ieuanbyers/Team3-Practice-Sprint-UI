import { JobFamilyRequest } from "../model/jobFamilyRequest";

module.exports.validateJobFamilyRequest= function (JobFamilyRequest: JobFamilyRequest): string {

    if(JobFamilyRequest.name.length < 1) {
        return "Name cannot be empty";
    }

    if(JobFamilyRequest.name.length > 50) {
        return "Name greater than 50 characters";
    }

    return null 
}

