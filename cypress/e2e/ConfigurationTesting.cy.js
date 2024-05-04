/// <reference types="cypress"/>
describe('Configuration Testing on Amazon Website', () => 
{
    beforeEach(() => 
    {
      cy.visit('https://www.amazon.in/');
    });
    it('Should verify page title', () => 
    {
      cy.title().should('include', 'Amazon');
    });
    it('Should verify page URL', () => 
    {
      cy.url().should('include', 'amazon.in');
    });
    it('Should verify language settings', () => 
    {
      cy.get('#icp-nav-flyout').should('contain', 'EN');
    });
  });
  