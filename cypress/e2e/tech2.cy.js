//import {} from ""
//import "cypress-real-events/support";

describe("Tech Interview", () => {
    
  it("Test 1", () =>{
     
      cy.visit('http://www.facebook.com')  
      cy.get('#destinationInput-input').click().get('.BpkButton_bpk-button__MDk1Y BpkButton_bpk-button--link__NGVhY FilterButton_button__Mzc2N').click()
      
      // Filling the multi-search form
      //cy.get('*[class^="DateInput_DateInput--text"}').click().get('*[class^="BpkSelect_bpk-select"}').click().type({downArrow}).type({downArrow}).type({Enter})

      //cy.log('---Starting searching for Search field')
      //cy.get('#dropdownCompany').should('be.visible')
      //cy.get('#dropdownCompany').realHover('mouse')
      
  })
})
