Cypress.Commands.add('loginAsInstitution', () => {
  cy.visit('https://www.kuizzo.com/signin');

  // Use correct selectors based on confirmed attributes
  cy.get('input[name="username"]').type('mohantest2004');
  cy.get('input[name="password"]').type('@Mohanbalaji2004');
  cy.get('button[type="submit"]').click();

  // Ensure login was successful
  cy.wait(2000);
  cy.url().should('include', '/institution-dashboard');
});
