describe("add to cart product", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[class^="product-item"]').first().click();
    cy.url().should("include", "/product");

    cy.get('button[class^="add-to-cart-button"]').click();
    cy.contains("Cart (1)").should("exist");
  });

  it("should not be able to add duplicated products on cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[class^="product-item"]').first().click();
    cy.url().should("include", "/product");

    const addToCartButton = cy.get('button[class^="add-to-cart-button"]');
    addToCartButton.click();
    addToCartButton.click();

    cy.contains("Cart (2)").should("not.exist");
  });
});
