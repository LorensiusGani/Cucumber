import { Given, When, Then } from "@cucumber/cucumber";

Given("the user is on the login page", function () {
  console.log('the user is on Login Page'); 
});

When("the user enters the valid credentials", function () {
  console.log('the user has entered valid credentials'); 
});

Then("the user should be redirected to the dashboard", function () {
  console.log('user has been successfully redirected to the dashboard'); 
});