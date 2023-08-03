import { JobFamilyRequest } from '../model/jobFamilyRequest';

module.exports.validateJobFamilyRequest= function (JobFamilyResponseRequest: JobFamilyRequest): string {

	if(JobFamilyResponseRequest.name.length < 1) {
		return 'Name cannot be empty';
	}

	if(JobFamilyResponseRequest.name.length > 50) {
		return 'Name greater than 50 characters';
	}
	return null; 
};

