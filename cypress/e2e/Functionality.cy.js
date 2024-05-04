/// <reference types="cypress"/>
describe('Amazon Functionality Testing', () => {
  it('Should search for a product on Amazon', () => {
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('arun2594tinku@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('Tinku@2594');
    cy.get('#signInSubmit').click();
    const searchTerm = 'iphone';
    cy.get('#twotabsearchtextbox').type(searchTerm).should('have.value', searchTerm);
    cy.get('#nav-search-submit-button').click();
    cy.get('.s-search-results').should('exist');
    cy.get('.s-search-results [data-component-type="s-search-result"]').first().find('h2 a').click();
  });
});
