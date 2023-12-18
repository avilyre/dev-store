describe("Search for products", () => {
  it("should be able to type search form and submit it", () => {
    cy.visit("http://localhost:3000");

    const searchForm = cy.get("input[class^='search-form']");
    searchForm.type("moletom").parent().submit();

    cy.get('a[class^="product-item"]').should("exist");
  });
});
