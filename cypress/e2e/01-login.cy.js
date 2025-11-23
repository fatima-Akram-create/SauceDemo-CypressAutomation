
describe('Login Tests', () => {
beforeEach(() => {
  cy.visit("/", { waitUntil: "domcontentloaded" });
});
  it('valid login', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.contains('Products').should('be.visible');
  });

  it('invalid login shows error', () => {
    cy.get('[data-test="username"]').type('wrong_user');
    cy.get('[data-test="password"]').type('wrong_pass');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('exist');
  });
});
