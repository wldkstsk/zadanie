describe('API tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should get all customers', () => {
        cy.request('/api/customers')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(3)
                expect(response.body[0]).to.have.property('id', 1)
                expect(response.body[0]).to.have.property('name', 'Jan Testowy')
            })
    })

    it('should get a single customer', () => {
        cy.request('/api/customers/1')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id', 1)
                expect(response.body).to.have.property('name', 'Jan Testowy')
            })
    })

    it('should add a new customer', () => {
        cy.request('POST', '/api/customers', { name: 'Adam Testowy' })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq("Dodano klienta")
            })
    })

    it('should update an existing customer', () => {
        cy.request('PUT', '/api/customers/2', { name: 'Paweł Testowy' })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq("Zaktualizowano klienta")
            })
    })

    it('should delete an existing customer', () => {
        cy.request('DELETE', '/api/customers/3')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq("Usunięto klienta")
            })
    })
})