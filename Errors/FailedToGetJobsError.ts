export class FailedToGetJobsError implements Error {
	constructor(message: string) {
		this.message = message;
	}

	message: string;
	name: string;
}