const PropertiesReader = require('properties-reader');
const Paths = require('../Allpaths/paths');
const properties = PropertiesReader('config.properties'); // Ensure this path is correct

class Login {
    constructor(page) {
        this.page = page;
        this.paths = new Paths(page);
        this.baseURL = properties.get('baseURL');
    }

    async loginpage(userData) {
        await this.page.goto(this.baseURL);
        await this.page.locator(this.paths.EmailInput).fill(userData.Email);
        await this.page.locator(this.paths.Nextbtn).click();
        await this.page.locator(this.paths.PasswordInput).fill(userData.Password);
        await this.page.locator(this.paths.Login).click();
        await this.page.locator(this.paths.Notnow).click();
    }
}

module.exports = Login;
