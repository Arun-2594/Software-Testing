const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video: true,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
