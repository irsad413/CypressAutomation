
import { auth } from '../../support/pages/auth' 
import { navigateTo } from '../../support/pages/navigations'
const LoginLocators = require("../../support/pages/auth") ;  // this way reaches all objects of auth


 describe('Auth: Login user with different ways' , () => {

    // navigation to the test page 
    beforeEach('navigate to login page' , () => {
        cy.clearAllCookies() ; 
        navigateTo.loginPage() ; // this funtion we called it from our POM
    }) 

    it('Happy path scenario using POM function' , () => {
        // auth.login('hardcoded variables') --->  not a good way

        cy.fixture('user').then((user) => {
           // auth.login(user.user2.username , user.user2.password) ;
           // i need to import locators object 
           LoginLocators.locators.userName.type(user.user2.username) ; 
           LoginLocators.locators.password.type(user.user2.password) ; 
           LoginLocators.locators.submit.click() ; 

        })

        // let's call our custom command to verify the text
        cy.textExists('You logged into a secure area!') ; 
        auth.logout() ; 
    }) ; 

    it('Check invalid user credentials' , () => {

        auth.login('invalid123' , 'invalid123') ; // beauty of re-usability
        // verify error message
        cy.textExists('Your username is invalid!') ; 
    })
 }) ; 
