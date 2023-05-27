/// <reference types="Cypress" />

Cypress.Commands.add('GETallBooks', (response) => {
    return cy.request({
        method: 'GET',
        url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
        failOnStatusCode: false,
    }).then(($res) => {
        response = $res
    })
})
