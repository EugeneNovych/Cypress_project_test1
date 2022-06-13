/// <reference types = "cypress"/>

// it('Demo Registration', () => {
//     cy.visit('https://react-redux.realworld.io/#/login?_k=k9qcm9')
//     cy.get(':nth-child(1) > .form-control').type('Eugene123@gmail.com')
//     cy.get(':nth-child(2) > .form-control').type('admin123')
//     cy.get('.btn').contains('Sign in').should('be.visible').click()
// })

it('Demo Fixture', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=k9qcm9')

    cy.fixture('example').then(user => {
        cy.get(':nth-child(1) > .form-control').type(user.email)
        cy.get(':nth-child(2) > .form-control').type(user.password)
    })

    cy.get('.btn').contains('Sign in').should('be.visible').click()
})
