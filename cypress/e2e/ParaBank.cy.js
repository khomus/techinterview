// webpage_interface_test_spec.js

describe('Web Page Interface Test', () => {
    beforeEach(() => {
      cy.visit('/parabank/index.htm;jsessionid=F45558A57F2D292D5CD0B4E77688E148');
    });
  
    it('should have the correct title', () => {
      cy.title().should('include', 'ParaBank | Welcome | Online Banking');
    });
  
    it('should have a header with specific text', () => {
      cy.get('#headerPanel').should('contain', 'Experience the difference');
    });
  
    it('should have a login form', () => {
      cy.get('form[name="login"]').should('exist');
      cy.get('form[name="login"] input[name="username"]').should('exist');
      cy.get('form[name="login"] input[name="password"]').should('exist');
      cy.get('form[name="login"] input[type="submit"]').should('exist');
    });
  
    it('should have a link to "Forgot login info?"', () => {
      cy.contains('Forgot login info?').should('have.attr', 'href', 'lookup.htm;jsessionid=F45558A57F2D292D5CD0B4E77688E148');
    });
  
    // Add more tests based on your web page's features and structure
  });