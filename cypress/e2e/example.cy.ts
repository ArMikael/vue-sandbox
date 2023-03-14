// https://docs.cypress.io/api/introduction/api.html

describe('Home page test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('.router-link-active', 'Home');
  });
});
