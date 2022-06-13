describe('Testing something on Google', () => {
    it('I can search something', () => {
        cy.visit('https://www.google.com');
        cy.get("input[type='search']").type('Сауна Івано-Франківськ').type('{enter}');
    });
});