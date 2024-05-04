/// <reference types="cypress"/>
describe('Amazon Performance Testing', () => 
{
    it('Should measure page load time for Amazon homepage', () => 
    {
      const startTime = new Date().getTime();
      cy.visit('https://www.amazon.in/');
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click();
      cy.window().then((win) => 
      {
        const loadTime = new Date().getTime() - startTime;
        cy.log(`Page Load Time: ${loadTime} ms`);
      });
    });
  });
  