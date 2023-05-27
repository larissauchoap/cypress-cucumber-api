/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let response

Given("The user access API", () => {
    return true;
});

When("The user send the request to all books", () => {
    cy.GETallBooks()
        .then(($res) => {
            response = $res
            cy.log(JSON.stringify(response.body));
        })
});

Then("The status code should be 200", () => {
    expect(response.status).to.eq(200);
});

Then("The all books should be returned", () => {
    expect(response.body).to.be.not.null;
});
