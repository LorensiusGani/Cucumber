  Feature: User Authentication
    Scenario: Successful Login
      Given the user is on the login page
      When the user enters the valid credentials
      Then the user should be redirected to the dashboard
