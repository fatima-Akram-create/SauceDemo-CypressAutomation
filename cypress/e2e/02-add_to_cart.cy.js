
describe('Add to Cart Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
  });
 

  it('add one item', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain','1');
  });
});
