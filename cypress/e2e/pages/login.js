export default class LoginPage {
    constructor() { }

    loginURL() {
        cy.visit("localhost:3000");
    }

    enterUserName() {
        cy.get('input[name="username"]').clear()
        cy.get('input[name="username"]').type('jan.testowy@wskz.pl');
    }

    enterInvalidUserName() {
        cy.get('input[name="username"]').clear()
        cy.get('input[name="username"]').type('tomasz.testowy@wskz.pl');
    }

    enterUserPassword() {
        cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type('aqLrvDJ348');
    }

    enterInvalidUserPassword() {
        cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type('aaa1111');
    }

    clickOnLoginButton() {
        cy.get('input[type="submit"]').click();
    }

    verifyUrl() {
        cy.url().should('include', '/home')
    }

    verifyFailedUrl() {
        cy.url().should('include', '/auth')
    }

    verifyPageText() {
        cy.contains('Welcome back, jan.testowy@wskz.pl!')
    }

    verifyFailedPageText() {
        cy.contains('Incorrect Username and/or Password!')
    }

}