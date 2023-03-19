Feature: Check information about student

    Scenario: Enter WSKZ websire and check information about student
        Given I navigate to the main page
        When I clicked on Link
        And I opened Samorzad Studencki page
        And I checked Samorzad Studencki page url corectness
        Then Student name is Dawid Małecki and he is on 3rd year of study