///<reference types="Cypress"/>

// describe('Mobile phone replenishment', () => {
//     it('Replenishment less than the allowed amount', () => {})
// })

// it('By ID', () => {
//     cy.visit('https://www.facebook.com/')
//     cy.get('#email')
// })

// it('By Class', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.get('.DocSearch').click()
//     cy.get('.docsearch-input')
//     // cy.get('#docsearch-input')
// })

// it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.viewport(1920, 1080)
//     cy.get('nav')
// })
// it('By Tag value', () => {
//     cy.visit('https://www.facebook.com/')

//     cy.get('[name="pass"]')
// })

// it('By Different tag', () => {
//     cy.visit('https://www.facebook.com/')
//     cy.viewport(1920, 1080)
//     cy.get('[role="button"]')
// })

// it('By Different Types', () => {
//     cy.visit('https://www.cypress.io/')
//     cy.viewport(1920, 1080)
//     cy.wait(3000)
//     cy.get('button[class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button onetrust-lg close-icon"]')
// })

// it.only('By Contains Name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.viewport(1920, 1080)
//     cy.wait(3000)
//     cy.get('*[class^="card"]')
// })

it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    // cy.get('.scrollactive-nav > :nth-child(1) > .block')
    cy.get('a[href="#Syntax"]').eq(1)
    // cy.get('div').find('nav').find('ul').find('li').find('a').eq(0)
})
