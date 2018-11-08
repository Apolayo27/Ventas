$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mapolayom/Katalon/Ventas/Include/features/loginselenium.feature");
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
  "name": "Test the login functionality of EA application with selenium",
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
  "name": "I navigate the login page selenium",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstepselenium.I_navigate_the_login_page_selenium()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"admin\" password \"password\" selenium",
  "keyword": "When "
});
formatter.match({
  "location": "loginstepselenium.I_enter_username_password_selenium(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button selenium",
  "keyword": "And "
});
formatter.match({
  "location": "loginstepselenium.I_click_login_button_selenium()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the expected text selenium",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepselenium.I_should_see_the_expected_text_selenium()"
});
formatter.result({
  "status": "passed"
});
});