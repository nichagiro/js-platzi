import Button from "@components/custom/Button"
import React from "react"

const props = {
    name: 'BUTTON',
    color: 'success',
    onClick: () => alert('se dio click')
}

describe('<Button>', () => {
    it('mounts', () => {
        cy.mount(<Button {...props} />)
    })
    it('click', () => {
        cy.mount(<Button {...props} />)
        cy.get('.btn').click()
    })
    it('name', () => {
        cy.mount(<Button {...props } />)
        cy.get('.btn').should('have.text', props.name)
    })
})
