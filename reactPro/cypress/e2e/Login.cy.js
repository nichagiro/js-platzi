const EMAIL = 'nichagiro@gmail.com'
const PASS = 'N12274654asd'

describe('Login Page', () => {
    it('On Load', () => {
        cy.visit('/');
    });

    it('Fill Form', () => {
        cy.get('[name="email"]').type(EMAIL);
        cy.get('[name="password"]').type(PASS);
        cy.get('[name="remember"]').check();        
    });

    it('On Submit', () => {
        cy.contains('Login').click();
    });

    it('Submit Success', () => {
        cy.url().should('includes', '/home')
    });
})
