package loginsteps
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver

import com.kms.katalon.core.webui.driver.DriverFactory

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class loginstepselenium {
	public static WebDriver driver



	@Given("I navigate the login page selenium")
	def I_navigate_the_login_page_selenium() {

		System.setProperty("webdriver.chrome.driver", "/Users/mapolayom/Documents/QA/Automatizacion/chromedriver")
		driver = new ChromeDriver()
		DriverFactory.changeWebDriver(driver)
		driver.get('http://www.executeautomation.com/demosite/Login.html')
	}

	@When('I enter username "(.*)" password "(.*)" selenium')
	def I_enter_username_password_selenium(String userName, String Password) {


		driver.findElement(By.xpath("//*[@name='UserName']")).sendKeys(userName)
		driver.findElement(By.xpath("//*[@name='Password']")).sendKeys(Password)

		//WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_UserName'), userName)
		//WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_Password'), Password)
	}

	@And("I click login button selenium")
	def I_click_login_button_selenium() {
		driver.findElement(By.xpath("//*[@name='Login']/p[3]/input")).click()
		//WebUI.click(findTestObject('Object Repository/Page_Execute Automation/input_Login_Login'))
	}

	@Then("I should see the expected text selenium")
	def I_should_see_the_expected_text_selenium() {
		String text = "Click for Generating JavaScript Alert"

		if(driver.findElement(By.xpath("//*[@name='generate']")).isDisplayed()) {
			System.out.println("Perfect Displayed !!!");
		}
		else {
			System.out.println("Perfect not Displayed !!!");
		}

		//WebUI.verifyTextPresent('Click for Generating JavaScript Alert', true)
		driver.close()
	}
}