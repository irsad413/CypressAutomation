const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://practice.cydeo.com/' , 
    env: {
      login:"/login",
      apiUrl: "https://demoqa.com" , 
      apiBooks: "/BookStore/v1/Books"
    } , 
    video: false ,
    retries: 1, 
    defaultCommandTimeout: 5000,
    viewportHeight: 800,
    viewportWidth: 1200 ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// like confugutration properties
