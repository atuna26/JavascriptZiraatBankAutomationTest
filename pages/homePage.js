const { By, until } = require("selenium-webdriver");

class HomePage {
    constructor(driver) {
        /**
 * @type {import("selenium-webdriver").WebDriver}
 */
        this.driver = driver;
        this.accountBalance = By.id("com.ziraat.ziraatmobil:id/account_info_value");
        this.logoutButton = By.xpath('//android.widget.ImageButton[@content-desc="Güvenli Çıkış"]');
        this.logoutConfirmButton = By.id("com.ziraat.ziraatmobil:id/button_ok");
        this.warningText = By.id("com.ziraat.ziraatmobil:id/text_message");

    }

    async checkBalance() {
        const balanceElement = await this.driver.wait(until.elementLocated(this.accountBalance), 10000);
        return await balanceElement.getText();
    }

    async logout() {
        const logoutBtn = await this.driver.findElement(this.logoutButton);
        await logoutBtn.click();
        const logoutConfirmBtn = await this.driver.wait((until.elementLocated(this.logoutConfirmButton)),3000);
        await logoutConfirmBtn.click();
    }

    async checkWarning(){
        const warningText =await this.driver.wait((until.elementLocated(this.warningText)),15000);
        await this.driver.findElement(this.logoutConfirmButton).click();
        return await warningText.getText();
    }
}

module.exports = HomePage;
