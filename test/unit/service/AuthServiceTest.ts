import {LoginRequest} from "../../../model/auth";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinon, {SinonStub} from "sinon";
const loginValidator = require("../../../validator/loginValidator")
const chai = require('chai');
const expect = chai.expect;
const authService = require('../../../service/authService');

describe('AuthService', function () {
    let stub:SinonStub;
    beforeEach(() => { stub = sinon.stub(loginValidator,"validateLogin") })
    it('should return 200 with a token', async () => {
        const testData: LoginRequest = {
            username: "test@kainos.com",
            password: "password"
        }
        stub.returns(null);


        let mock = new MockAdapter(axios);

        const data = [testData];

        mock.onPost(authService.URL).reply(200,"token");
        console.log(authService.URL)

        let results = await authService.login(testData);
        expect(results).to.equal("token");

    })

    it('should return error when validation string is not null', async () => {
        const testData: LoginRequest = {
            username: "test",
            password: "password"
        }

        stub.returns("email address not valid");

        try
        {
            await authService.login(testData);
        } catch (e)
        {
            expect(e.message).to.equal('email address not valid')
        }

    })

    it('should return error when axios returns 500', async () => {
        const testData: LoginRequest = {
            username: "test",
            password: "password"
        }

        stub.returns(null);

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

    })

    it('should return error when axios returns 400', async () => {
        const testData: LoginRequest = {
            username: "test",
            password: "password"
        }

        stub.returns(null);

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
    })

    afterEach (() =>{
        sinon.restore();
    })
})