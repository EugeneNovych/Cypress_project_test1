/// <reference types = "cypress"/>

it('Write to file', () => {
    cy.writeFile('Demi1File.txt', 'I am QA')
})

it('Read to file', () => {
    cy.readFile('Demi1File.txt').should('contains', 'I am QA')
})
