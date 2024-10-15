
var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;

const fs = require("fs")
const HomePage = require("./pages/homePage");
const LoginPage= require("./pages/loginPage");
const MenuPage = require("./pages/menuPage");
const Public = require("./pages/public");
const TransferPage = require("./pages/TransferPage");
const path = require("path");
const addContext = require("mochawesome/addContext");
var caps = {
   
  "platformName": "Android",
  "appium:options":{
    "deviceName": "Medium_Phone_API_35",
    "udid": "emulator-5554",
    "platformVersion": "15",
    "skipUnlock": "true",
    "noReset":true,
    "appPackage": "com.ziraat.ziraatmobil",
    "appActivity": "com.ziraat.ziraatmobile.SplashActivity",
    "automationName": "uiautomator2",
  },
    browserName: '',   
};

describe(`ziraat mobile app test Device: ${caps["appium:options"].deviceName} Version: ${caps["appium:options"].platformVersion}`,function(){
  this.timeout(60000);

  /**
 * @type {import("selenium-webdriver").WebDriver}
 */
  let driver;
 
  /**
 * @type {import("./pages/public")}
 */
  let public;
 
  /**
 * @type {import("./pages/loginPage")}
 */
  let loginPage;
   /**
 * @type {import("./pages/homePage")}
 */
  let homePage;
  /**
 * @type {import("./pages/menuPage")}
 */
  let menuPage;

  /**
 * @type {import("./pages/TransferPage")}
 */
  let transferPage;

  before(async function () {
    driver = await new wd.Builder().usingServer("http://localhost:4723").withCapabilities(caps).build();
    console.log("Driver has started.")
    public = new Public(driver)
    loginPage = new LoginPage(driver);
    homePage = new HomePage(driver);
    menuPage = new MenuPage(driver);
    transferPage = new TransferPage(driver);
  
  })

 
  it("Login on same device already valid credentials @smoke",async function() {
    await loginPage.login("235689")
  })

  it("Check Balance",async function () {
    const balance = await homePage.checkBalance();
    console.log("Account Balance:", balance);
  })



  it("Direct Money Transfer",async function () {
    await public.toggleMenuPage();
    await menuPage.directMoneyTransferToOtherAccount()
    await transferPage.moneyTransferProcess("IBAN INFO","NAME INFO","AMOUNT","Bu bir açıklama metnidir #$½>£#$. 1234567890")
  })

  it("Checking is there any warning when internet connection is disabled", async function () {
    await public.disableMobileData();
    await public.disableWifi();
    const warningText = await homePage.checkWarning();
    console.log(warningText);
  })

  it("Logout",async function () {
    await homePage.logout();
    console.log("Logout clicked");
  })

  afterEach(async function () {
    if(this.currentTest.state==="failed"){
      const date = new Date();
      const timestamp = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

      const screenShot = await driver.takeScreenshot();
      const screenShotPath = path.join(__dirname,"./testReports/ScreenShots", `${this.currentTest.title}${timestamp}.png`)
      
      fs.writeFileSync(screenShotPath,screenShot,"base64");
      addContext(this,"Test Fail Screenshot")
      addContext(this,screenShotPath)
      console.log(screenShotPath)
    }
  })


  after(async function () {
    if(driver){
      await driver.quit()
      console.log("Driver quited")
    }
  })
})
