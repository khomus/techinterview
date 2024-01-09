//import {} from ""

describe("Tech Interview", () => {
    
  it("Test 1", () =>{
     
      cy.visit('http://news.zerkalo.io/economics/58207.html')  
      cy.log('---Starting searching for Search field')
      cy.get("search_from_str").should('be.visible');
      
  })
})
