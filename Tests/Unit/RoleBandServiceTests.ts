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

describe('EmployeeService', function () {
    describe('getEmployees', function () {
      it('should return employees from response', async () => {
        var mock = new MockAdapter(axios);

        const data = [employee];

        mock.onGet(EmployeeService.URL).reply(200, data);

        var results = await EmployeeService.getEmployees();

        expect(results[0]).to.deep.equal(employee)
      })

      it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onGet(EmployeeService.URL).reply(500);

        var error = await EmployeeService.getEmployees()
        
        expect(error.message).to.equal('Could not get employees')
      })
    })