describe('Log in', function () {
    it('Sing in', function () {
        cy.visit('https://unsplash.com/')
        cy.contains('Log in').click()
        cy.get('input[type="email"]').type('test1@test.com')
        cy.get('input[type="password"]').type('1234567')
        cy.get('input[type="submit"]').click()
    })
})
