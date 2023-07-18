
describe('How to do API tests with cypress', () => {
    it('Simple GET request, check status headers and body', () => {
      cy.request({
        // this function takes a json object as parameter, and inside this object we define core parts of HTTP request
        method: 'GET',
        // hardcoded url: https://demoqa.com/BookStore/v1/Books
        url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
        // other than method and url the rest of options depend on your test case
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(200);
       
      });
    });
  });