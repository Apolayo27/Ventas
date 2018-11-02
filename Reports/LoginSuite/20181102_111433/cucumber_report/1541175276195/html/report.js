$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mapolayom/Katalon/Ventas/Include/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "  I want to use this login functionality of the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Test the login functionality of EA application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I navigate the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstep.I_navigate_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"admin\" password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginstep.I_enter_username_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginstep.I_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the expected text",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstep.I_should_see_the_expected_text()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify text \u0027Clic for Generating JavaScript Alert\u0027 is present  (Root cause: Text \u0027Clic for Generating JavaScript Alert\u0027 is not present on page )\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword.verifyTextPresent(VerifyTextPresentKeyword.groovy:83)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword.execute(VerifyTextPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyTextPresent(WebUiBuiltInKeywords.groovy:1693)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyTextPresent$3.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat loginsteps.loginstep.I_should_see_the_expected_text(loginstep.groovy:71)\n\tat ✽.I should see the expected text(/Users/mapolayom/Katalon/Ventas/Include/features/login.feature:28)\n",
  "status": "failed"
});
});