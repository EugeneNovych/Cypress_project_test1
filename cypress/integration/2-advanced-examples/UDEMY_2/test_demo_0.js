/// <reference types= "cypress"/>

class demoClass {
    visiteSite() {
        cy.visit('https://www.google.com/')
    }
}

export default demoClass
