/// <reference types="cypress"/>
describe('Mouse Testing on Amazon Website', () => 
{
    beforeEach(() => 
    {
      cy.visit('https://www.amazon.in/');
    });
    it('Should hover over menu items', () => 
    {
      cy.get('#nav-hamburger-menu').click();
      cy.get('.hmenu-visible > :nth-child(14) > .hmenu-item').trigger('mouseover');
      cy.get('.hmenu-visible > :nth-child(17) > .hmenu-item > div').should('be.visible');
    });
    it('Should click on buttons', () => 
    {
      cy.contains('Today\'s Deals').click();
    });
    it('Should drag and drop items', () => 
    {
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').should('exist');
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').trigger('mousedown', { which: 1 });
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').trigger('mousemove');
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').trigger('mouseup');
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').should('exist');
    });
  });