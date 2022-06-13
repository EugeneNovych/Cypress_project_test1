describe('Rozetka', () => {
    it('By', () => {
        cy.visit('https://rozetka.com.ua/')
        cy.viewport(1920, 1080)
        cy.get('input[type="text"]').type('iphone 13')
        cy.contains('Найти').click()
        cy.contains('Мобильный телефон Apple iPhone 13 Pro Max 128GB Sierra Blue Официальная гарантия').click()
        cy.contains('Купить').click()
    })
})
