const webdriver = require('selenium-webdriver');
const chai = require('chai');

describe('viewJobRolesTest', async () => {

    it('test to check if elements of the capabilities colunm exits on the job roles page', async () => {

        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

        await driver.get(process.env.UI_TEST_URL);

        await driver.findElement(webdriver.By.xpath('//*[@id="job-roles"]/table/thead/tr/th[2]')).getText().then(function(value) {
            chai.assert.equal(value, 'Capability')
        });

        await driver.quit();
    });
});
