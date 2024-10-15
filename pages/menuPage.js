const { By, until } = require("selenium-webdriver");
const commands = require("wd/lib/commands");

class MenuPage {
    constructor(driver) {
        /**
        * @type {import("selenium-webdriver").WebDriver}
        */
        this.driver = driver;
        this.menuButton = By.id("com.ziraat.ziraatmobil:id/menu_button");
        this.moneyTransferSectionButton = By.xpath('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.ziraat.ziraatmobil:id/menu_tree_recycler"]/android.widget.FrameLayout[2]/android.widget.LinearLayout');
        this.anotherAccountButton = By.xpath('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.ziraat.ziraatmobil:id/menu_child_tree_recycler"]/android.widget.FrameLayout[2]')
    }

    async directMoneyTransferToOtherAccount() {
        await this.driver.findElement(this.moneyTransferSectionButton).click();
        await this.driver.findElement(this.anotherAccountButton).click();
    }

   

}

module.exports = MenuPage;
