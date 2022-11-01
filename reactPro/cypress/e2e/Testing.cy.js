describe('Testing Google', () => {
    it.only('Visit ', () => {
        cy.visit('https://www.pokemon.com/el/pokedex/')
    })
    it('Event Mouse Hover', () => {
        cy.get('.gb_Ve').trigger('mouseover')
    })
    it('Reload Force Cache', () => {
        cy.reload(true)
    })
    it.only('Search ', () => {     
        cy.get('.gLFyf').as('search')
        cy.get('@search').type('goku {enter}')
    })
    it.only('Enter Images', () => {
        cy.get('.MUFPAc').children().contains('Imágenes').click()
    })
    it.only('Search Data', () => {
        cy.url().should('include', 'goku')
    })
    it.only('Result Data', () => {
        cy.get('[jscontroller="H9MIue"]')
    })
    it('Delete Warning SafeSearcg', () => {
        //  obsen search warning alert
        cy.contains('Descartar').parents().find('[jsaction="HsDSld"]').click()
    })
    it('Back View ', () => {
        cy.go(-1)
    })
    it('Next View ', () => {
        cy.wait(5000)
        cy.go(1)
    })
    it.only('Select Image', () => {
        // cy.pause()
        cy.get('#islrg .islrc div img').then(images => {
            cy.wrap(images).eq(3).type('{enter}').debug()
        })
    })   
},)



