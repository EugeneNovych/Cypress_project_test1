describe('Test Grinfer Input', () => {
    it('Test Grinfer input', () => {
        cy.visit('https://grinfer.com/')
        cy.viewport(1920, 1080)
        cy.get('input[type="text"]').type('Sport').should('have.value', 'Sport')
        cy.get('button[class="sc-tghwm-0 sc-1q9s0sp-5 eJKhbS hsfeJX"]').should('be.visible').click()
        cy.get('a[class="sc-1m292s3-1 dgepQD sc-g7i5pe-4 kVSgqS"]').should('be.visible').contains('Sports injury rehabilitation').click()
        cy.wait(3000)
        cy.get('a[class="sc-1xj3xob-0 ezBrmu sc-1dqgp31-2 dLiCGc"]').should('be.visible').contains('Try for free').click()
        cy.get('div[class="sc-b8rou2-0 juRvRL"]').should('be.visible')
    })
})
