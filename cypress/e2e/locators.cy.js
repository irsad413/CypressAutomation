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

          // tagName
          cy.get("input").each((item , index , list) => {
            // assert the length of the list is 2
            expect(list).to.have.length(2) ; 
            expect(item).to.have.attr("type") ; 


          })

          // by attribute name
          cy.get('[type]') ; 

          // by className
           cy.get('.btn.btn-primary') ; 

           // by id
           cy.get('#wooden_spoon') ; 

            // if i want to use text : no xpath in cypress . but it still possible with a different approach
            cy.get('button').should('contain' , 'Login').click() ; 



    })

    it('Check finding elements by traveling through DOM' , () => {
      // travel to find the login button : locate username box - go to parent form - then find button

      cy.get('input[name="username"]').parents('form').find('button').should('contain' ,'Login' ).click() ; 
    })

     it.only('Check Diffrent Type of Assertions' , () => {

      //cypress itself bundles assertions provided by Chai , Sinon and jQuery libraries
      //Should Assertion : does the assertion directly on the object itself
      cy.get('#wooden_spoon')
      .should('contain' , 'Login')
      .and('have.class' , 'btn btn-primary') ; 

      //expect assertion: create a subject of our test , then you implement different actions
      cy.get('#wooden_spoon').then((buttonElement) => {
        expect(buttonElement).to.have.text('Login') ; 
        expect(buttonElement).to.have.class('btn btn-primary') ; 

      })

     })
  
})