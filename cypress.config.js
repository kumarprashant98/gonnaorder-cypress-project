module.exports = {
  video: true,
  // experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      const fs = require('fs')
      on('after:spec', (spec, results) => {  //check result of spec
        if (results && results.video) {   // result and video both are present then
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed') //check if the state is failed then keep the video
          )
          if (!failures) {
            fs.unlinkSync(results.video) //check if state is not failed then delete the video - unlinksync use to delete video
          }
        }
      })
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure = true;

    }
    },
    
      env:
      {
        baseUrl: "https://admin.testgodev.nl/",
        devUrl: "https://www.youtube.com/"
        

      }
    
};

