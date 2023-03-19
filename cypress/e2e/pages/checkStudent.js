export default class StudentPage {

    mainPageUrl() {
        cy.visit("http://localhost:3000/new-page")
    }

    clickMeLink() {
        cy.get('a[href="https://www.wskz.pl"]')
            .invoke("removeAttr", "target")
            .click()
        cy.origin('https://www.wskz.pl', () => {
            cy.url().should('contain', 'https://www.wskz.pl')
        })
    }

    openSamorzadPage() {
        cy.contains('Samorząd studencki').click({ force: true })
    }

    verifySamorzadUrl() {
        cy.url().should('contains', 'https://www.wskz.pl/samorzad-studencki')
    }

    verifyStudentInfo() {
        cy.get('span').contains('Dawid Małecki')
        cy.get('p').contains('student III roku')
    }

}