import Input from "@components/custom/Input";
import React from "react";

const props = {
    name: 'nombre',
    label:' Nombre',
    defaultValue: 'Nicolas',
}

describe('<Input>', () => {
    it('mounts', () => {
        cy.mountForm(<Input {...props} />)
    })
    it('name', () => {
        cy.mountForm(<Input {...props} />)
        cy.get('.form-control').should('include.value', props.defaultValue)
    })
})