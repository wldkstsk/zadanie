import 'cypress-file-upload';

export default class SignupPage {

    registrationURL() {
        cy.visit("localhost:3000/registration");
    }

    enterEmail() {
        cy.get('input[name="username"]').clear()
        cy.get('input[name="username"]').type('student@wskz.pl');
    }

    enterPassword() {
        cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type('aqLrvDJ348');
    }

    selectCountry() {
        cy.get('select[id="country"]').select('Poland')
        cy.wait(1000)
    }

    selectHobby() {
        cy.get('select[id="hobby"]').select('Books')
        cy.wait(1000)
    }

    selectFile() {
        const fixtureFile = 'image.png';
        cy.get('input[type="file"]').attachFile(fixtureFile);
    }

    AdditionalInfo() {
        cy.get('textarea').type('testowy')
    }

    checkBoxes() {
        cy.get('input[type="checkbox"]').eq(0).check()
        cy.get('input[type="checkbox"]').eq(1).check()
        cy.get('input[type="checkbox"]').eq(2).check()
    }

    saveButton() {
        cy.get('input[value="Save"]').click()
    }

    verifyAccountUrl() {
        cy.url().should('include', '/success-registration')
    }

    verifyPageText() {
        cy.contains('Account created for: student@wskz.pl')
    }

}