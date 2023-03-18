Feature: Create user profile

    Scenario: Complete registration correctly
        Given I navigate to the registration page
        When I entered email address
        And I entered password
        And I selected Country
        And I selected Hobby
        And I select photo
        And I provided additional information
        And I checked Condition of Use checkboxes
        And I clicked Save button to create an account
        Then I checked Url after creating an account
        And I checked text after success login