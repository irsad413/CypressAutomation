/// <reference types="cypress" />



describe('Cypress file upload tests' , () => {
    /**
     * Step1: 
     * In order to upload files in Cypress we need to install plugin
     * we will run follwing command:
     * npm install -dev cypress-file-upload
     * 
     * Step2:
     * we need to import neccessary command to our project 
     * in our support folder we have commands.js file : this file is a good place for putting our utility methods (functions)
     * add following line : 
     * import 'cypress-file-upload' ; 
     * 
     * Step3:
     * The file that you want to upload should be in your fixture folder
     */


    beforeEach('Navigate to upload page',() => {
        // run before each test case , beforeMethod in testNG
        cy.clearAllCookies() ;
        cy.visit('/upload')  ;
    })

        it('Check upload action' , () => {
            // locator for choose file button
            cy.get('input#file-upload').attachFile('pic.jpeg')
            // click on upload button
            cy.get('input#file-submit').click() ; 
            // assert that path message is displayed
            cy.get('#uploaded-files').then(() => {
                cy.contains('pic.jpeg').should('be.visible') ; 

            }) ; 
      

        });
  
}) ; 
