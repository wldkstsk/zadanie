import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const StudentPage = require('../../pages/checkStudent')
const student = new StudentPage()

Given('I navigate to the main page', () => {
    student.mainPageUrl();
})

When("I clicked on Link", () => {
    student.clickMeLink();
})

And("I opened Samorzad Studencki page", () => {
    student.openSamorzadPage();
})

And("I checked Samorzad Studencki page url corectness", () => {
    student.verifySamorzadUrl();
})

Then("Student name is Dawid Małecki and he is on 3rd year of study", () => {
    student.verifyStudentInfo();
})