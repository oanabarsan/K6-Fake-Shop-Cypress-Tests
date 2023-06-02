const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  projectId: "5ufk4x",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});