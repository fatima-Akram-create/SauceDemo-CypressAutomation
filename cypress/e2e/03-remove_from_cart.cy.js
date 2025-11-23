
describe('Remove From Cart Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
  });

  it('remove item', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
