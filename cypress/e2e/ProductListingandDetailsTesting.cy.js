/// <reference types="cypress"/>
describe('Amazon Product Listing and Details Testing', () => 
{
    it('Should navigate to a product details page from the product listing', () => 
    {
      cy.visit('https://www.amazon.com/');
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click();
      const searchTerm = 'laptop';
      cy.get('#twotabsearchtextbox').type(searchTerm);
      cy.get('#nav-search-submit-button').click();
      cy.get('.s-search-results [data-component-type="s-search-result"]').first().find('h2 a').click();
      cy.get('#productTitle').then(($title) => 
      {
        const productTitle = $title.text().trim();
        cy.go('back');
        cy.url().should('include', '/s?k=' + searchTerm.replace(' ', '+'));
        cy.get('.s-search-results [data-component-type="s-search-result"]').first().find('h2 a').click();
        cy.get('#productTitle').should('contain', productTitle);
      });
    });
  });