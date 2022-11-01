const SEARCH = 'smith'

describe('Carcter Page', () => {
    it('On Load', () => {
        cy.visit('home');
    });

    it('Fill Form', () => {
        cy.get('[name="search"]').type(SEARCH);       
    });

    it('Click Favorite', () => {
        cy.get('.card').click({ multiple: true });       
    });

    it('Remove Favorite', () => {
        cy.get('.card').eq(2).click();       
    });
})
