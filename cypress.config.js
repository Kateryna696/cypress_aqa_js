const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://example.com',
     specPattern: '**/*.cy.{js,jsx,ts,tsx}',
     viewportWidth: 1280,
     viewportHeight: 720,
     screenshotsFolder: 'cypress/screenshots',
     screenshotOnRunFailure: true,
     videosFolder: 'cypress/videos',
     video: true,
     retries:{ runMode: 2, openMode: 1 },
     downloadsFolder:'cypress/downloads',

  },
});
