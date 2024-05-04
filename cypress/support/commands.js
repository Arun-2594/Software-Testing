// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('searchOnAmazon', (keyword) => 
{
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('arun2594tinku@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('Tinku@2594');
    cy.get('#signInSubmit').click();
    cy.get('#twotabsearchtextbox').type(keyword).type('{enter}');
  });
  