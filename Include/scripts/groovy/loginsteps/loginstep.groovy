package loginsteps
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords
import com.sun.beans.decoder.TrueElementHandler

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

class loginstep {

	@Given("I navigate the login page")
	def I_navigate_the_login_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('http://www.executeautomation.com/demosite/Login.html')
	}

	@When('I enter username "(.*)" password "(.*)"')
	def I_enter_username_password(String userName, String Password) {
		WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_UserName'), userName)
		WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_Password'), Password)
	}

	@And("I click login button")
	def I_click_login_button() {
		WebUI.click(findTestObject('Object Repository/Page_Execute Automation/input_Login_Login'))
	}

	@Then("I should see the expected text")
	def I_should_see_the_expected_text() {
		WebUI.verifyElementAttributeValue(findTestObject('Object Repository/Page_Execute Automation/input_Click for Generating Jav'), 'value', 'Generate', 20)
		//WebUI.verifyElementText(findTestObject('Object Repository/Page_Execute Automation/input_Click for Generating Jav'), '')
		//WebUI.verifyElementVisible(findTestObject('Object Repository/Page_Execute Automation/input_Click for Generating Jav'))
		//WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Execute Automation/input_Click for Generating Jav'), 20)
		//WebUI.verifyTextPresent('Click for Generating JavaScript Alert', true)
		WebUI.closeBrowser()
	}
}