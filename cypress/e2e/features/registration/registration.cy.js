import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const SignupPage = require('../../pages/registration')
const signup = new SignupPage()

Given('I navigate to the registration page', () => {
    signup.registrationURL();
})

When('I entered email address', () => {
    signup.enterEmail();
})

And('I entered password', () => {
    signup.enterPassword();
})

And('I selected Country', () => {
    signup.selectCountry();
})

And('I selected Hobby', () => {
    signup.selectHobby();
})

And('I provided additional information', () => {
    signup.AdditionalInfo();
})

And('I checked Condition of Use checkboxes', () => {
    signup.checkBoxes();
})

Then('I clicked Save button to create an account', () => {
    signup.saveButton();
})

And('I select photo', () => {
    signup.selectFile();
})