/// <reference types="cypress" />

describe('Alerts in Cypress test enviroment' ,  { baseUrl: 'https://demoqa.com' } , () => {
 

    beforeEach(() => {
        // run before each test case , beforeMethod in testNG
        cy.clearAllCookies() ; 
        cy.visit('/alerts')
    })
  

    it('Check alert confirmation' , () => {
      

        const stub = cy.stub() ;  // created a stub function

        cy.on('window:confirm' , stub) ; // when this confirmation command initiated store and give the control to stub function

        cy.get('#confirmButton').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?') ; 
        })

        cy.on('window:confirm' , () => true) ;  // confirm the alert

        cy.contains('You selected Ok').should('be.visible') ; 
       
       
    }) ; 

}) ; 

   
