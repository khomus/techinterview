//import {} from ""
//import "cypress-real-events/support";

describe("Tech Interview", () => {
    
  it("Test 1", () =>{
     
      cy.visit('http://www.skyscanner.net?previousCultureSource=COOKIE&redirectedFrom=www.skyscanner.net&locale=en-GB')  
      cy.get('#destinationInput-input').click().then() => {
         cy.get('.BpkButton_bpk-button__MDk1Y BpkButton_bpk-button--link__NGVhY FilterButton_button__Mzc2N').click()
      }
         

      //cy.log('---Starting searching for Search field')
      //cy.get('#dropdownCompany').should('be.visible')
      //cy.get('#dropdownCompany').realHover('mouse')
      
  })
})
