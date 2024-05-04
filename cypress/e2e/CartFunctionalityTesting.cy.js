/// <reference types="cypress"/>
describe('Amazon Cart Functionality Testing', () => 
{
  beforeEach(() => 
  {
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('arun2594tinku@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('Tinku@2594');
    cy.get('#signInSubmit').click();
  });

  it('Should add items to the cart and proceed to checkout', () => 
  {
    const searchTerm = 'iphone';
    cy.get('#twotabsearchtextbox').type(searchTerm);
    cy.get('#nav-search-submit-button').click();
    cy.get('.s-search-results [data-component-type="s-search-result"]').first().find('h2 a').click();
    cy.get('#a-autoid-1-announce').click();
    cy.get('#attach-desktop-sideSheet').should('be.visible');
    cy.get('#nav-cart').click();
    cy.get('.a-list-item').should('contain', searchTerm);
    cy.get('#sc-buy-box-ptc-button').click(); // You may need to adjust this selector based on the Amazon UI
    // Verify that the checkout page is displayed
    cy.url().should('include', '/checkout');
  });
});
