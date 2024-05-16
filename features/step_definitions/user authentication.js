const {Given,When,Then} = require ('@cucumber/cucumber');

Given('the user is on login page', function () {
    console.log('login page');
    //file
  });

  When('they enter the valid credential', function () {
    console.log('Success');
  });

  Then('they should be redirected to the dashboard', function () {
    console.log('Success');
  });