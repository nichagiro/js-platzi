import './commands'
import { mount } from 'cypress/react18'
import React from 'react'
import Single from '../Layouts/Single';
import Form from '../Layouts/Form';
import Page from '../Layouts/Page';

Cypress.Commands.add('mount', (component) => {
    return mount(<Single>{component} </Single>)
})

Cypress.Commands.add('mountForm', (component) => {
    return mount(<Form>{component} </Form>)
})

Cypress.Commands.add('mountPage', (component) => {
    return mount(<Page>{component} </Page>)
})

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    return originalFn(url, options)
})