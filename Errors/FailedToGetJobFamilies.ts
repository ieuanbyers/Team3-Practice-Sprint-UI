export class FailedToGetJobFamiliesError extends Error {
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}