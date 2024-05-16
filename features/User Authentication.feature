  Feature: User Authentication
    
    Scenario: Successful Login
      Given the user is on login page
      When they enter the valid credential
      Then they should be redirected to the dashboard
