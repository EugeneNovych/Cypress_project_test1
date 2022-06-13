describe('Scroll', () => {
    it('scroll to car', () => {
        cy.visit('https://unsplash.com/')
        cy.get('[data-test="homepage-header-search-form-input"]').type('Car{enter}')
        // cy.get('h1[class="Aa1sS j8AIa xNKUO dvBHu oh0KJ tiVPC PP9J3 Vcj1r"]').should('have.text', 'Car')
        cy.wait(3000)
        cy.scrollTo(0, 2500)
        // cy.get(':nth-child(1) > :nth-child(7) > .YdIix > :nth-child(1) > .MbNnd > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]').click()
        cy.get(':nth-child(1) > :nth-child(7) > .YdIix > :nth-child(1)').click()
    })
})
