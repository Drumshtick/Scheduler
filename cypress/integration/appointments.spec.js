describe('Appointments', () => {
  beforeEach(function() {
    // Run these commands before each it
    cy.request('GET', '/api/debug/reset');

    cy.visit('/');

    cy.contains('Monday');  
  });

  it('should book an interview', () => {
    // Select new appointment
    cy.get('[alt=Add]')
      .first()
      .click();
    // Type student name
    cy.get('[data-testid="student-name-input"]')
      .type("Lydia Miller-Jones");
    // Select interviewer
    cy.get('[alt="Sylvia Palmer"')
      .click();

    cy.contains('Save')
      .click();
    // Verify changes
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", function() {
    cy.get('[alt="Edit"]')
      // Since this cy.get returns a list select the first item
      .first()
      // Force will bypass the hover which shows the edit icon
      .click({ force: true });

    cy.get('[data-testid="student-name-input"]')
      .clear()
      .type("Erik K");
    cy.get('[alt="Tori Malcolm"]')
      .click();

    cy.contains('Save')
      .click();

    cy.contains(".appointment__card--show", "Erik K");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", function() {
    cy.get('[alt="Edit"]')
      // Since this cy.get returns a list select the first item
      .first()
      // Force will bypass the hover which shows the edit icon
      .click({ force: true });

    cy.get('[data-testid="student-name-input"]')
      .clear()
      .type("Erik K");
    cy.get('[alt="Tori Malcolm"]')
      .click();

    cy.contains('Cancel')
      .click();

    cy.get('.appointment__card')
      .should('include.text', 'Archie Cohen');
  });

  it.only("should delete an interview", function() {
    cy.get('[alt="Delete"]')
      // Since this cy.get returns a list select the first item
      .first()
      // Force will bypass the hover which shows the edit icon
      .click({ force: true });

    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
  });
});