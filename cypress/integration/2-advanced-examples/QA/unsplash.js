import Login from './PageObject/logi'

describe('Assertions', () => {
    const login = new Login()

    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/')
        cy.viewport(1920, 1080)
        cy.location('protocol').should('eq', 'https:')
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')
        cy.visit('https://unsplash.com/login')

        login.btnLogin().should('be.visible').click()
        // cy.contains('Log in').click()
        login.email().type('123123@test.com').should('have.value', '123123@test.com')

        login.password().type('123123').should('have.value', '123123')

        login.clickBtnLogin().should('be.visible').click()
        cy.contains('Invalid email or password.').should('be.visible')
    })
})

// describe('Assert', () => {
//     it('Assert Web Test', () => {
//         cy.visit('https://unsplash.com/')
//         cy.viewport(1920, 1080)
//         cy.location('protocol').should('eq', 'https:')
//         cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')
//         // cy.visit('https://unsplash.com/login')
//         // cy.get('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]').should('be.visible').click()
//         // cy.contains('Log in').click()
//         cy.get('input[id="user_email"]').type('123123@test.com').should('have.value', '123123@test.com')
//         cy.get('input[id="user_password"]').type('123123').should('have.value', '123123')
//         cy.get('input[type="submit"]').should('be.visible').click()
//         cy.contains('Invalid email or password.').should('be.visible')
//     })
// })
