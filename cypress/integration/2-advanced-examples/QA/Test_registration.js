describe('Test registration', () => {
    const USER_EMAIL = '1test1@gmail.com'
    const USER_FIRST_NAME = 'Mamba'
    const USER_LAST_NAME = 'Tamba'
    const USER_PASSWORD = 'Qa123456'
    it('test registration positive', () => {
        cy.visit('https://grinfer.com/')
        cy.get('.sc-2aalce-3').should('be.visible').click()
        cy.get('.sc-1cabfn5-0').should('contain', 'Create an account to get started')

        cy.get('#email').type(USER_EMAIL).should('have.value', USER_EMAIL)
        cy.get('#firstName').type(USER_FIRST_NAME).should('have.value', USER_FIRST_NAME)
        cy.get('#lastName').type(USER_LAST_NAME).should('have.value', USER_LAST_NAME)
        cy.get('#password').type(USER_PASSWORD).should('have.value', USER_PASSWORD)
        cy.get('.sc-p4qn9p-0').should('be.visible').click()
    })
})
