/// <reference types="cypress"/>
describe('Amazon Login', () => {
    it('Should login to Amazon website', () => { 
      cy.visit('https://www.amazon.in/');
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('label > input').click();
      cy.get('#signInSubmit').click();
    });
  });