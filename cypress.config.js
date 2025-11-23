const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    pageLoadTimeout: 0,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
});
