describe("Search for products", () => {
  it("should be able to type search form and submit it", () => {
    cy.searchByQuery("ai side");

    cy.get('a[class^="product-item"]').should("exist");
  });
});
