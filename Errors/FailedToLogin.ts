export class FailedToLogin extends Error {
    constructor(message: string) {
        super(message)
    }
}