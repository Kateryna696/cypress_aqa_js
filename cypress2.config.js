const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://qauto2.forstudy.space/',
     specPattern: '**/*.cy.{js,jsx,ts,tsx}',
     viewportWidth: 1280,
     viewportHeight: 720,
     screenshotsFolder: 'cypress/screenshots',
     screenshotOnRunFailure: true,
     videosFolder: 'cypress/videos',
     video: true,
     downloadsFolder:'cypress/downloads',
     env:{
      MAIN_USER_EMAIL:'kustova.kate+11@gmail.com',
      MAIN_USER_PASSWORD:'Kat12345',
     },
     reporter: 'mochawesome',
  },
});
