/*#Tool Cucumber Node js :
- npm init 
- npm install --save-dev @cucumber/cucumber
*/
const { Given, When, Then } = require("@cucumber/cucumber");

Given("the user is on login page", function () {
  console.log('Login Page');
});

When("they enter the valid credential", function () {
  console.log('Please input username and password');
});

Then("they should be redirected to the dashboard", function () {
  console.log('Welcome to dashboard');
});
