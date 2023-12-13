describe("Search for products", () => {
  it("should be able to type search form and submit it", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[class^="search-form"]').type("ai side").parent().submit();

    cy.get('a[href^="/product"]').should("exist");
  });
});
