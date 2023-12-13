describe("add to cart product", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href^="/product"]').first().click();
    cy.url().should("include", "/product");

    cy.get('button[class^="add-to-cart-button"]').click();
    cy.contains("Cart (1)").should("exist");
  });

  it("should not be able to add duplicated products on cart", () => {
    cy.searchByQuery("ai side");

    cy.get('a[href^="/product"]').first().click();
    cy.get('button[class^="add-to-cart-button"]').click();

    cy.contains("Cart (2)").should("not.exist");
  });
});
