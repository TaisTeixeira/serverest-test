const { defineConfig } = require("cypress");
//const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
 //     allureCypress(on);
    },
    baseUrl: 'https://front.serverest.dev/',
    video: true,
    chromeWebSecurity: false,
    projectId: "xhyuhk",
  },
});