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
  "status": "passed"
});
});