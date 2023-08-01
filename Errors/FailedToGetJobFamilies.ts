export class FailedToGetJobFamiliesError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
    }
    message: string;
    name: string;
}