export class FailedToGetBandError implements Error {
    constructor(message: string) {
        this.message = message;
    }

    message: string;
    name: string;
}