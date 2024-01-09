//import {} from ""
import "cypress-real-events/support";

describe("Tech Interview", () => {
    
  it("Test 1", () =>{
     
      cy.visit('https://www.cypress.io')  
      cy.log('---Starting searching for Search field')
      cy.get('#dropdownCompany').should('be.visible')
      cy.get('#dropdownCompany').realHover('mouse')
      
  })
})
