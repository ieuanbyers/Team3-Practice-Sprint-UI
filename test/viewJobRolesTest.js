const webdriver = require('selenium-webdriver');
const chai = require('chai');

describe('viewJobRolesTest', async () => {

    it('test to check if elements of the job roles page are visable', async () => {

        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

        await driver.get(process.env.UI_TEST_URL);

        await driver.findElement(webdriver.By.id('job-roles')).getText().then(function(value) {
            chai.assert.equal(value, 'Jobs')
        });

        await driver.quit();
    });
});