const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev/', 
    video: true, 
    chromeWebSecurity: false, 
    projectId: "xhyuhk", 
    env: {
     // local: 'https://localhost/3000/',
      prod: 'https://serverest.dev/'
    },
  },
});