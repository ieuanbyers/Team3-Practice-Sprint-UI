var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const EmployeeService = require('../../../app/service/EmployeeService');
const employee = {
    salary: "30000",
    fname: "Mocha",
    lname: "Chai",
    email: "test@email.com",
    address: "address",
    address2: "address2",
    city: "city",
    county: "county",
    postalCode: "postalCode",
    country: "country",
    phoneNo: "01234567890",
    bankNo: "12345678",
    nin: "nin"
}