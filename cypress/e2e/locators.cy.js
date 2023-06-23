/// <reference types="cypress" />

describe('Find or get elements by using different locators' , () => {


    beforeEach(() => {
        // run before each test case , beforeMethod in testNG
        cy.clearAllCookies() ; 
        cy.visit('/login') ; 
    })

    it('Check different locators strategies' , () => {
          // By CSS locator
          cy.get("input[name='username']").type("CydeoStudent") 

          cy.get("[type='text']").clear() ; // clear what is type

          cy.get("input").each((item , index , list) => {
            // assert the length of the list is 2
            expect(list).to.have.length(2) ; 
            expect(item).to.have.attr("type") ; 


          })

    })
  
})