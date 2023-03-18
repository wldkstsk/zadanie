const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/features/*",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  }
});