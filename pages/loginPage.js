const { By, until } = require("selenium-webdriver");
const addContext = require('mochawesome/addContext');


class LoginPage {
    constructor(driver) {
        /**
        * @type {import("selenium-webdriver").WebDriver}
        */
        this.driver = driver;
        this.loginButton = By.id("com.ziraat.ziraatmobil:id/continue_button");
        this.tcInput = By.id("com.ziraat.ziraatmobil:id/idendity_number_edit");
        this.passwordInput = By.id("com.ziraat.ziraatmobil:id/password_edit");
        this.continueButton = By.id("com.ziraat.ziraatmobil:id/continue_button");
    }

    async login(password) {
        await this.driver.wait(until.elementLocated(this.continueButton),15000).click();
        await this.driver.wait(until.elementLocated(this.passwordInput),5000).sendKeys(password);
    }

}

module.exports = LoginPage;
