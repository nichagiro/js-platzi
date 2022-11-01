import Input from "@components/custom/Input";
import Button from "@components/custom/Button";
import React from "react";

const props = {
    name: 'nombre',
    label: ' Nombre',
    container: 'my-3',
    defaultValue: 'Nicolas',
}

const RenderComponet = () =>
    <div>
        <Input {...props} />
        <Button type='submit' name='Enviar' />
    </div>

describe('<Form>', () => {
    it('Mount Elements', () => {
        cy.mountForm(RenderComponet())        
    })
    it('Submit', () => {
        cy.mountForm(RenderComponet())        
        cy.get('form').submit()
    })
})