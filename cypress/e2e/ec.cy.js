// webpage_interface_test_spec.js

describe('Web Page Interface Test', () => {
    beforeEach(() => {
      cy.visit('https://commission.europa.eu/index_en');
    });
  
    it('should have the correct title', () => {
      cy.title().should('include', 'European Commission, official website');
    });
  
    it('should have a header with specific text', () => {
      cy.get('.ecl-site-header__header').should('contain', 'Welcome to the European Commission');
    });
  
    it('should display the European Commission logo', () => {
      cy.get('.ecl-site-header__logo-image-desktop').should('be.visible');
    });
  
    // Add more tests based on your web page's features and structure
  });