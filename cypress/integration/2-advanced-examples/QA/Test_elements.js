describe('Test Grinfer', () => {
    it('Test Grinfer btn', () => {
        cy.visit('https://grinfer.com/')
        cy.viewport(1920, 1080)
        cy.get('div[class="sc-286flp-0 hmSZTd"]').should('be.visible').click()
        // cy.get('.sc-286flp-1').should('be.visible').click()
        cy.get('li[class="sc-8lxa00-8 khDJuu"]').should('be.visible').contains('Design').click()
        // cy.get(':nth-child(1) > .sc-8lxa00-9').should('be.visible').click()
    })
})
