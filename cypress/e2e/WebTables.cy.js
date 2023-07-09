/// <reference types="cypress" />







describe('Cypress web table tests' , { baseUrl: 'https://demoqa.com'} , () => {
    /**
     * if you need to navigate to a URL other than your baseURL , you difine it at describe block or in 
     */



    beforeEach('Navigate to upload page',() => {

        cy.clearAllCookies() ;
        cy.visit('/webtables')  ;
    })

        it.skip('Check finding and editing a record' , () => {
            // locate table body - then navigate through this element to find Alden , then update info with anather person
            // 1.get me table body
            // 2.get me the row that contains Alden
            //3.store it into a jquert element
            cy.get('.rt-tbody') 
            .contains('.rt-tr-group' , 'Alden') 
            .then((row) => {
                // click on edit button for ALden record
                cy.wrap(row).find('[title="Edit"]').click() ; 
                cy.get('#firstName').clear().type('Kobe') ;  
                cy.get('#lastName').clear().type('Bryant') ;  
                cy.get('#submit').click() ; 
                // from cypress test perspective we are still inside row element : need to do Assertion
                cy.wrap(row).find('.rt-td').eq(0).should('contain' , 'Kobe') ; 
                cy.wrap(row).find('.rt-td').eq(1).should('contain' , 'Bryant') ; 


            })
     
            }) ; 

            it.skip('Check finding and deleting a record' , () => {

                cy.get('.rt-tbody') 
                .contains('.rt-tr-group' , 'Alden') 
                .then((row) => {
                    // click on Delete button for ALden record
                    cy.wrap(row).find('[title="Delete"]').click() ; 
                
                })

                //Assert that tble does Not have Alden record
                cy.get('.rt-tbody').should('not.contain' , 'Alden') ; 
                //search for Alden in the body
                cy.get('#searchBox').type('Alden') ; 
                //Assert that there is no record
                cy.get('.rt-tbody').should('not.contain' , 'Alden') ; 
                // Not data found element is visible or not
                cy.get('.rt-noData').should('contain' , 'No rows found').should('be.visible') ; 



                
        
         
                }) ; 

                it.skip('Check search for different age records' , () => {

                // define age groups 
                const ageGroup = [29 ,39,45,77]  ; 
                // for each ahe group perform same test  scenario 
                cy.wrap(ageGroup).each((age) => {
                    // type age into search box
                    cy.get('#searchBox').clear().type(age) ; 
                    // verify if that age exists , second number of records 

                        if(age === 77) {

                            // negative scenario
                            cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain' , age); 
                            cy.get('.rt-noData').should('contain' , 'No rows found').should('be.visible'); 

                        }else {

                    // positive scenario
                    cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain' , age); 
                    cy.get('.rt-tbody').contains('.rt-tr-group' , age).should('have.length' , 1); }

                }); 

    
            
             
                    }) ; 

                    xit('Check adding a new record - Bad code practice' , () => {
                        // click on add button 
                        cy.get('#addNewRecordButton').click() ; 
                        // fill form 
                        cy.get('#firstName').type('Kobe') ; 
                        cy.get('#lastName').type('Bryant') ; 
                        cy.get('#userEmail').type('kobe@0824@lakers.com') ; 
                        cy.get('#age').type('43') ; 
                        cy.get('#salary').type('300000') ; 
                        cy.get('#department').type('lagal') ; 
                        cy.get('#submit').click() ; 
                        // assert that new record is added

                        cy.get('.rt-tbody')
                        .contains('.rt-tr-group' , 'Kobe')
                        .then((row) => {

                            cy.wrap(row).find('rt-td').eq(0).should('contain' , 'Kobe') ; 
                            cy.wrap(row).find('rt-td').eq(1).should('contain' , 'Bryant') ; 
                            cy.wrap(row).find('rt-td').eq(2).should('contain' , 'kobe0824@example.com') ; 
                            cy.wrap(row).find('rt-td').eq(3).should('contain' , '43') ; 
                            cy.wrap(row).find('rt-td').eq(4).should('contain' , '300000') ; 
                            cy.wrap(row).find('rt-td').eq(5).should('contain' , 'lagal') ; 
                          

                        })

    
                     
                            }) ; 

                            it('Adding a new record - Better Aproach' , ()=> {
                                // click on add button
                                cy.get('#addNewRecordButton').click() ; 
                                cy.fixture('user').then((user) => {
                                    const columNames = Object.keys(user.user1) ; // goes to fixture folder  , gets user1 object keys and stores info  columNames Array

                                    const userData = Object.values(user.user1) ; 
                                    cy.wrap(columNames).each((columNames , index) => {
                                        // cy.log(columNames) ; 
                                        // cy.log(userData[index]) ; 
                                        cy.get(`#${columNames}`).type(`${userData[index]}`) ; 
                                    }) ; 
                                    cy.get('#submit').click() ; 
                                    
                                        // assert that new record is added

                        cy.get('.rt-tbody')
                        .contains('.rt-tr-group' , userData[0])
                        .then((row) => {

                            cy.wrap(userData).each((value , index) => {
                                cy.wrap(row).find('.rt-td').eq(index).should('contain' , value) ; 
                            }) ;
                                }) ;

                              

                        }) ; 

                            }) ; 
                  
          
      

        });
  

