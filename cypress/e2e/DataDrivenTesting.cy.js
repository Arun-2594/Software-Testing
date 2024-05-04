/// <reference types="cypress"/>
describe('Data-Driven Testing for Search Functionality on Amazon Website', () => 
{
    const searchTerms = ['laptop', 'smartphone', 'headphones'];
    searchTerms.forEach((term) => 
    {
      it(`Should search for "${term}"`, () => 
      {
        cy.visit('https://www.amazon.in/');
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type('arun2594tinku@gmail.com');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('Tinku@2594');
        cy.get('#signInSubmit').click();
        cy.get('#twotabsearchtextbox').type(term).type('{enter}');
        cy.contains('h1', 'results for').should('contain', term);
      });
    });
  });