//import {} from ""
//import "cypress-real-events/support";

describe("Tech Interview", () => {
    
  it("Test 1", () =>{
     
      cy.visit('http://www.skyscanner.net?previousCultureSource=COOKIE&redirectedFrom=www.skyscanner.net&locale=en-GB')  
      cy.get('#destinationInput-input').click().get('.BpkButton_bpk-button__MDk1Y BpkButton_bpk-button--link__NGVhY FilterButton_button__Mzc2N').click()
      
      // Filling the multi-search form
      cy.get('#fsc-origin-search-0').type("b").type({downArrow}).type({Enter})
      cy.get('#fsc-origin-search-1').type("j").type({downArrow}).type({Enter})
      cy.get('#fsc-destination-search-0').type("h").type({downArrow}).type({Enter})
      cy.get('#fsc-destination-search-1').type("i").type({downArrow}).type({Enter})
      //cy.get('*[class^="DateInput_DateInput--text"}').click().get('*[class^="BpkSelect_bpk-select"}').click().type({downArrow}).type({downArrow}).type({Enter})

      //cy.log('---Starting searching for Search field')
      //cy.get('#dropdownCompany').should('be.visible')
      //cy.get('#dropdownCompany').realHover('mouse')
      
  })
})
