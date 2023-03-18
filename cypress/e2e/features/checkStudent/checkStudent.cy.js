import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const StudentPage = require('../../pages/checkStudent')
const student = new StudentPage()

Given('I navigate to the main page', () => {
    student.mainPageUrl();
})

When("I clicked on Link", () => {
    student.clickMeLink();
})

And("I opened Samarzad Studencki page", () => {
    student.openSamorzadPage();
})

And("I checked Samorzad Studencki page url corectness", () => {
    student.verifySamorzadUrl();
})

Then("Student name is Tomasz Michalik and he is on 2nd year of study", () => {
    student.verifyStudentInfo();
})
