/// <reference types="cypress"/>
describe('Amazon India Payment Feature Testing', () => 
{
  beforeEach(() => 
  {
    cy.visit('https://www.amazon.in');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('arun2594tinku@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('Tinku@2594');
    cy.get('#signInSubmit').click();
  });
  it('should be able to add items to cart and proceed to checkout', () => 
  {
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('[data-component-type="s-search-result"]').first().click();
    cy.get('#a-autoid-1-announce').click();
    cy.get('#nav-cart-count-container').click();
    cy.url().should('include', '/gp/cart');
    cy.get('#sc-buy-box-ptc-button').click();
    cy.get('.a-spacing-base > .a-text-bold').click();
  });
});
