//import {} from ""

describe("Tech Interview", () => {
    
  it("Test 1", () =>{
     
      cy.visit('www.zerkalo.io')  
      cy.get("search_from_str").should('be.visible');
      
  })
})
