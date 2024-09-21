const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "viewportWidth": 2560,
    "viewportHeight": 1440,
    baseUrl: "http://localhost:3000/",
    retries: 2
    },
  },
);
