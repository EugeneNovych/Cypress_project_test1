/// <reference types="cypress" />

it('google test', function () {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    cy.wait(4000)
    cy.contains('Videos').click()
})

it.only('login test', function () {
    cy.visit('https://www.cypress.io/')
    cy.viewport(1920, 1080)
    cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(2) > :nth-child(3) > .Link-sc-5cc5in-0').click()
})
