import {LoginRequest} from '../../../model/auth';
const loginValidator = require('../../../validator/loginValidator');
const chai = require('chai');
const expect = chai.expect;

describe('LoginValidator', function () {
	it('check return not null when email is null', async () => {
		const testData: LoginRequest = {
			username: null,
			password: 'password'
		};

		const result = loginValidator.validateLogin(testData);

		expect(result).to.equal('email is empty');
	});

	it('check return not null when email is empty', async () => {
		const testData: LoginRequest = {
			username: '',
			password: 'password'
		};

		const result = loginValidator.validateLogin(testData);

		expect(result).to.equal('email is empty');
	});

	it('check return not null with invalid email', async () => {
		const testData: LoginRequest = {
			username: 'test',
			password: 'password'
		};

		const result = loginValidator.validateLogin(testData);

		expect(result).to.equal('email address not valid');
	});

	it('check return not null with null password', async () => {
		const testData: LoginRequest = {
			username: 'test@kainos.com',
			password: null
		};

		const result = loginValidator.validateLogin(testData);

		expect(result).to.equal('password is empty');
	});

	it('check return not null with empty password', async () => {
		const testData: LoginRequest = {
			username: 'test@kainos.com',
			password: ''
		};

		const result = loginValidator.validateLogin(testData);

		expect(result).to.equal('password is empty');
	});

	it('check return is null with correct format', async () => {
		const testData: LoginRequest = {
			username: 'test@kainos.com',
			password: 'password'
		};

		const result = loginValidator.validateLogin(testData);

		expect(result).to.equal(null);
	});
});