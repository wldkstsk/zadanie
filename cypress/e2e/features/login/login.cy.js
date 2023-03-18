import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/login';
//const LoginPage = require('../../pages/login')
const login = new LoginPage()

Given('I navigate to the login page', () => {
  login.loginURL();
  //cy.visit("localhost:3000")
})

When("I entered valid user name", () => {
  login.enterUserName();
})
When("I entered invalid user name", () => {
  login.enterInvalidUserName();
})

And("I entered valid user password", () => {
  login.enterUserPassword();
})

And("I entered invalid user password", () => {
  login.enterInvalidUserPassword();
})

And("I clicked Login button", () => {
  login.clickOnLoginButton();
})

Then("I checked url after success login", () => {
  login.verifyUrl();
})

Then("I checked url after failed login", () => {
  login.verifyFailedUrl();
})

And("I checked text after success login", () => {
  login.verifyPageText();
})

And("I checked text after failed login", () => {
  login.verifyFailedPageText();
})