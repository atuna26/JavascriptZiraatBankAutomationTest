const { By, until } = require("selenium-webdriver");

class TransferPage {
    constructor(driver) {
        /**
        * @type {import("selenium-webdriver").WebDriver}
        */
        this.driver = driver;
        this.ibanInput = By.id("com.ziraat.ziraatmobil:id/edit_iban");
        this.fullNameInput = By.id("com.ziraat.ziraatmobil:id/edit_full_name")
        this.continueButton = By.id("com.ziraat.ziraatmobil:id/continue_button")
        this.accountSelectButton = By.xpath('(//android.widget.FrameLayout[@resource-id="com.ziraat.ziraatmobil:id/view_account_list_item"])[1]/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout')
        this.balanceIntegerInput = By.id("com.ziraat.ziraatmobil:id/edit_text_integer")
        this.balanceScreenContButton = By.id("com.ziraat.ziraatmobil:id/button_continue")
        this.moneyType = By.id("com.ziraat.ziraatmobil:id/row_balance")
        this.firstText = By.xpath('//android.widget.TextView[@resource-id="com.ziraat.ziraatmobil:id/txt_text" and @text="Bireysel Ödeme"]')
        this.description = By.id("com.ziraat.ziraatmobil:id/edit_description")
        this.directApproveButton = By.xpath('(//android.widget.Button[@resource-id="com.ziraat.ziraatmobil:id/continue_button"])[2]')
        this.approveButton = By.id("com.ziraat.ziraatmobil:id/approve_button")
    }

    async moneyTransferProcess(iban,fullName,amount,desc){
        await this.driver.wait(until.elementLocated(this.ibanInput),15000).sendKeys(iban);
        await this.driver.findElement(this.fullNameInput).sendKeys(fullName);
        await this.driver.findElement(this.continueButton).click();
        await this.driver.wait(until.elementLocated(this.accountSelectButton),5000).click();
        await this.driver.wait(until.elementLocated(this.balanceIntegerInput),5000).sendKeys(amount);
        await this.driver.wait(until.elementLocated(this.balanceScreenContButton),5000).click();
        await this.driver.wait(until.elementLocated(this.moneyType),5000).click();
        await this.driver.wait(until.elementLocated(this.firstText),5000).click();
        await this.driver.wait(until.elementLocated(this.description),5000).sendKeys(desc);
        await  this.driver.wait(until.elementLocated(this.directApproveButton),5000).click();
       // await this.driver.findElement(this.approveButton).click();


    }



}

module.exports = TransferPage;
