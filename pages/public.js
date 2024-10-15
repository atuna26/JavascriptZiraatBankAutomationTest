const { By, until } = require("selenium-webdriver");
const commands = require("wd/lib/commands");

class Public {
    constructor(driver) {
        /**
        * @type {import("selenium-webdriver").WebDriver}
        */
        this.driver = driver;
        this.menuButton = By.id("com.ziraat.ziraatmobil:id/menu_button");

   }

    async toggleMenuPage(){
        await this.driver.findElement(this.menuButton).click();
    }

    async disableMobileData(){
        await this.driver.executeScript("mobile: shell",{
            command:"svc",
            args:["data","disable"]
        })
    }

    async disableWifi(){
        await this.driver.executeScript("mobile:shell",{
            command:"svc",
            args:["wifi","disable"]
        })
    }

}

module.exports = Public;
