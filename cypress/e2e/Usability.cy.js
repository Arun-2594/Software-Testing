/// <reference types="cypress"/>
describe('Usability Testing on Amazon Website', () => 
{
    beforeEach(() => 
    {
      cy.visit('https://www.amazon.in/');
    });
    it('Should verify navigation to product details page', () => 
    {
        const searchTerm = 'android tv';
        cy.get('#twotabsearchtextbox').type(searchTerm);
        cy.get('#nav-search-submit-button').click();
        cy.get('.s-search-results [data-component-type="s-search-result"]').first().find('h2 a').click();
    });
    it('Should verify user login', () => 
    {
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click();
      cy.contains('Hello, A').should('exist');
    });
  });