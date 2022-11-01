import React from "react";
import Login from "@pages/session/Login";

describe('<LoginPage>', () => {
    it('Mount Elements', () => {
        cy.mountPage(<Login />)
    })
})