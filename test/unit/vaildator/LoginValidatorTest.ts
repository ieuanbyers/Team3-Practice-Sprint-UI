import {Login} from "../../../model/auth";
const loginValidator = require("../../../validator/loginValidator")
var chai = require('chai');
const expect = chai.expect;

describe('LoginValidator', function () {
    it('check return not null when email is null', async () => {
        const testData: Login = {
            username: null,
            password: "password"
        }

        let result = loginValidator.validateLogin(testData);

        expect(result).to.equal("email is empty");
    })

    it('check return not null when email is empty', async () => {
        const testData: Login = {
            username: "",
            password: "password"
        }

        let result = loginValidator.validateLogin(testData);

        expect(result).to.equal("email is empty");
    })

    it('check return not null with invalid email', async () => {
        const testData: Login = {
            username: "test",
            password: "password"
        }

        let result = loginValidator.validateLogin(testData);

        expect(result).to.equal("email address not valid");
    })

    it('check return not null with null password', async () => {
        const testData: Login = {
            username: "test@kainos.com",
            password: null
        }

        let result = loginValidator.validateLogin(testData);

        expect(result).to.equal("password is empty");
    })

    it('check return not null with empty password', async () => {
        const testData: Login = {
            username: "test@kainos.com",
            password: ""
        }

        let result = loginValidator.validateLogin(testData);

        expect(result).to.equal("password is empty");
    })

    it('check return is null with correct format', async () => {
        const testData: Login = {
            username: "test@kainos.com",
            password: "password"
        }

        let result = loginValidator.validateLogin(testData);

        expect(result).to.equal(null);
    })
})