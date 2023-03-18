Feature: Create user profile

    Scenario: Complete registration without attaching a photo
        Given I navigate to the registration page
        When I entered email address
        And I entered password
        And I selected Country
        And I selected Hobby
        And I select photo
        And I provided additional information
        And I checked Condition of Use checkboxes
        Then I clicked Save button to create an account