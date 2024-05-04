/// <reference types="cypress"/>
describe('Amazon Content Testing', () => {
    it('should display the correct title', () => {
      cy.visit('https://www.amazon.in/')
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click(); 
      cy.title().should('include', 'Amazon')
    })
    it('should display relevant product information', () => {
      cy.visit('https://www.amazon.in/') 
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click();
      cy.get('#twotabsearchtextbox').type('laptop')
      cy.get('#nav-search-submit-button').click()
      cy.get('.s-result-list').should('contain.text', 'laptop') 
    })
    it('should display accurate pricing information', () => {
      cy.visit('https://www.amazon.in/') 
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click();
      cy.get('#twotabsearchtextbox').type('laptop')
      cy.get('#nav-search-submit-button').click()
      cy.get('.a-price .a-offscreen').should('exist') 
    })
  })