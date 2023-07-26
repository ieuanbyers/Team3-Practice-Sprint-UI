import {Login} from "../../../model/auth";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinon from "sinon";
const loginValidator = require("../../../validator/loginValidator")
var chai = require('chai');
const expect = chai.expect;
const authService = require('../../../service/authService');

describe('AuthService', function () {

    it('should return 200 with a token', async () => {
        const testData: Login = {
            username: "test@kainos.com",
            password: "password"
        }

        const stub = sinon.stub(loginValidator,"validateLogin").returns(null);

        let mock = new MockAdapter(axios);

        const data = [testData];

        mock.onPost(authService.URL).reply(200,"token");
        console.log(authService.URL)

        let results = await authService.login(testData);
        expect(results).to.equal("token");

        sinon.restore();
    })

    it('should return error when validation string is not null', async () => {
        const testData: Login = {
            username: "test",
            password: "password"
        }

        const stub = sinon.stub(loginValidator,"validateLogin").returns("email address not valid");

        try
        {
            await authService.login(testData);
        } catch (e)
        {
            expect(e.message).to.equal('email address not valid')
        }
        sinon.restore();

    })

    it('should return error when axios returns 500', async () => {
        const testData: Login = {
            username: "test",
            password: "password"
        }

        const stub = sinon.stub(loginValidator,"validateLogin").returns(null);

        let mock = new MockAdapter(axios);

        const data = [testData];

        mock.onPost(authService.URL).reply(500);

        try
        {
            await authService.login(testData);
        } catch (e)
        {
            expect(e.message).to.equal('could not login')
        }
        sinon.restore();

    })

    it('should return error when axios returns 400', async () => {
        const testData: Login = {
            username: "test",
            password: "password"
        }

        const stub = sinon.stub(loginValidator,"validateLogin").returns(null);

        let mock = new MockAdapter(axios);

        const data = [testData];

        mock.onPost(authService.URL).reply(400);

        try
        {
            await authService.login(testData);
        } catch (e)
        {
            expect(e.message).to.equal('could not login')
        }
        sinon.restore();

    })
})