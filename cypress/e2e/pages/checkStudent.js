export default class StudentPage {

    mainPageUrl() {
        cy.visit("http://localhost:3000/new-page")
    }

    clickMeLink() {
        cy.get('a[href="https://www.wskz.pl"]')
            .invoke("removeAttr", "target")
            .click()

        cy.wait(4000)
    }

    openSamorzadPage() {
        cy.get('div[class="JiTKZ9"]').eq(2)
            .trigger('mouseover')
        cy.get('ul[class="BzPmc3 wixui-dropdown-menu__submenu"]')
            .children().eq(12)
            .click()
    }

    verifySamorzadUrl() {
        cy.url().should('be', 'https://www.wskz.pl/samorzad-studencki')
    }

    verifyStudentInfo() {
        cy.get('span').contains('Tomasz Michalik')
        cy.get('p').contains('- student II roku')
    }

}