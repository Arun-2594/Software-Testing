/// <reference types="cypress"/>
describe('Keyword-Driven Testing for Search Functionality on Amazon Website', () => {
    const testData = [
      { keyword: 'laptop' },
      { keyword: 'smartphone' },
      { keyword: 'headphones' }
    ];
  
    testData.forEach((data) => {
      it(`Should search for "${data.keyword}"`, () => {
        cy.searchOnAmazon(data.keyword);
        cy.contains('h1', 'results for').should('contain', data.keyword);
      });
    });
  });
  