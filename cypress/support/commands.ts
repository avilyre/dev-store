/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>;
  }
}

Cypress.Commands.add("searchByQuery", (query: string) => {
  cy.visit("http://localhost:3000");
  cy.get('input[class^="search-form"]').type(query).parent().submit();
});
