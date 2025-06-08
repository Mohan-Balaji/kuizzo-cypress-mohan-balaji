describe('Instructor Management', () => {
  before(() => {
    // Ensure you are logged in before running any tests
    cy.loginAsInstitution(); // assumes you defined it in support/commands.js
  });

  beforeEach(() => {
    // Ensure we're logged in before each test
    cy.session('institution', () => {
      cy.loginAsInstitution();
    });
  });

  it('Adds a new instructor with course assignments', () => {
    // Visit the instructor manager page
    cy.visit('https://www.kuizzo.com/mohantest/institution-dashboard/instructor-manager');

    // Wait for the page to load and button to be visible
    cy.contains('Add Individual Instructor', { timeout: 10000 }).should('be.visible').click();

    // Fill in instructor details
    cy.get('input[name="instructorName"]').should('be.visible').type('testInstructor1');
    cy.get('input[name="email"]').should('be.visible').type('testInstructor1@example.com');

    // Select courses for the instructor
    cy.get('input[placeholder="Select Courses."]').should('be.visible').click();
    cy.contains('AI Engineering').should('be.visible').click();
    cy.contains('Computer Networking').should('be.visible').click();

    // Submit the form using the correct button selector
    cy.get('button.inline-flex.items-center.w-full.justify-center.whitespace-nowrap.text-pure-white.rounded-button-border-radius.bg-app-purple.max-w-max.py-\\[19px\\].px-\\[38px\\].text-\\[22px\\].leading-\\[24px\\]')
      .should('be.visible')
      .click();

    // Verify success message using the h2 element
    cy.get('h2')
      .contains('Instructor Added Successfully!')
      .should('be.visible');

    // Click the View Instructors button
    cy.contains('button', 'View Instructors')
      .should('be.visible')
      .click();

    // Verify we're still on the instructor manager page
    cy.url().should('eq', 'https://www.kuizzo.com/mohantest/institution-dashboard/instructor-manager');
  });
}); 