const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    baseUrl: 'https://web.superfrete.com/#/calcular-correios',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
