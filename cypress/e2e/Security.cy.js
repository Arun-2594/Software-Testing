/// <reference types="cypress"/>
describe('Amazon Security Testing', () => 
{
    it('Should perform basic security checks on Amazon website', () => 
    {
      cy.visit('https://www.amazon.in/');
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email').type('arun2594tinku@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type('Tinku@2594');
      cy.get('#signInSubmit').click();
      cy.location('protocol').should('eq', 'https:');
      cy.get('[src^="http://"]').should('not.exist');
      cy.get('[href^="http://"]').should('not.exist');
      cy.get('script').each(($script) => 
      {
        if (!$script.attr('integrity')) 
        {
          cy.wrap($script).should('not.have.attr', 'integrity');
        }
      });
      cy.request('https://www.amazon.in/').then((response) => 
      {
        const hstsHeaderValue = response.headers['strict-transport-security'];
        expect(hstsHeaderValue).to.include('max-age='); 
        expect(hstsHeaderValue).to.include('includeSubDomains');
        expect(hstsHeaderValue).to.include('preload');
        expect(response.headers['content-security-policy']).to.exist;
        expect(response.headers['x-content-type-options']).to.eq('nosniff');
        expect(response.headers['x-frame-options']).to.eq('SAMEORIGIN');
        const xssProtectionValue = response.headers['x-xss-protection'];
        const parts = xssProtectionValue.split(';').map(part => part.trim());
        const includesModeBlock = parts.some(part => part.includes('mode=block'));
        const includes1 = parts.includes('1');
        expect(includesModeBlock && includes1).to.be.false;
      });
    });
  });