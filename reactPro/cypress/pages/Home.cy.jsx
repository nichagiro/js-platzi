import React from "react";
import Home from "@pages/Home";

describe('<HomePage>', () => {
    it('Mount Elements', () => {
        cy.mountPage(<Home />)
    })
})

