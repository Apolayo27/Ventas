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
  "error_message": "groovy.lang.MissingMethodException: No signature of method: static com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyTextPresent() is applicable for argument types: (java.lang.String, java.lang.Class) values: [Click for Generating JavaScript Alert, class com.sun.beans.decoder.TrueElementHandler]\nPossible solutions: verifyTextPresent(java.lang.String, boolean), verifyTextPresent(java.lang.String, boolean, com.kms.katalon.core.model.FailureHandling), verifyTextNotPresent(java.lang.String, boolean), verifyAlertPresent(int), verifyAlertPresent(int, com.kms.katalon.core.model.FailureHandling), verifyTextNotPresent(java.lang.String, boolean, com.kms.katalon.core.model.FailureHandling)\n\tat groovy.lang.MetaClassImpl.invokeStaticMissingMethod(MetaClassImpl.java:1503)\n\tat groovy.lang.MetaClassImpl.invokeStaticMethod(MetaClassImpl.java:1489)\n\tat org.codehaus.groovy.runtime.callsite.StaticMetaClassSite.call(StaticMetaClassSite.java:53)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat loginsteps.loginstep.I_should_see_the_expected_text(loginstep.groovy:72)\n\tat ✽.I should see the expected text(/Users/mapolayom/Katalon/Ventas/Include/features/login.feature:28)\n",
  "status": "failed"
});
});