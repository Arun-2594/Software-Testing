/// <reference types="cypress"/>
describe('Amazon UI Feature Testing', () => 
{
    beforeEach(() => 
    {
      cy.visit('https://www.amazon.in/');
    });
    it('Should verify the presence of important UI elements', () => 
    {
      cy.get('#twotabsearchtextbox').should('be.visible');
      cy.get('#nav-hamburger-menu').should('be.visible');
      cy.get('#nav-cart').should('be.visible');
      cy.get('#navFooter').should('be.visible');
    });
    it('Should perform a search and display search results', () => 
    {
      const searchTerm = 'laptop';
      cy.get('#twotabsearchtextbox').type(searchTerm);
      cy.get('#nav-search-submit-button').click();
      cy.get('.s-result-list').should('be.visible');
    });
    it('Should navigate to a product category page', () => 
    {
        cy.get('[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').click();
        cy.get('[href="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"]').click();
    });
  });