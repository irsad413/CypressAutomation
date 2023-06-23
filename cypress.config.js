const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://practice.cydeo.com/' , 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// like confugutration properties
