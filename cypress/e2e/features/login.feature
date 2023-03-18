Feature: Log-in to website with valid login and password

    Scenario: Log-in with valid name and password
        Given I navigate to the login page
        When I entered valid user name
        And I entered valid user password
        And I clicked Login button
        Then I checked url after success login
        And I checked text after success login

    Scenario: Log-in with valid name and invalid password
        Given I navigate to the login page
        When I entered valid user name
        And I entered invalid user password
        And I clicked Login button
        Then I checked url after failed login
        And I checked text after failed login

    Scenario: Log-in with invalid name and valid password
        Given I navigate to the login page
        When I entered invalid user name
        And I entered valid user password
        And I clicked Login button
        Then I checked url after failed login
        And I checked text after failed login

    Scenario: Log-in with invalid name and invalid password
        Given I navigate to the login page
        When I entered invalid user name
        And I entered invalid user password
        And I clicked Login button
        Then I checked url after failed login
        And I checked text after failed login