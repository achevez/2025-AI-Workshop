const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = {
  ...defineConfig({
    e2e: {
      baseUrl: process.env.BASE_URL || "https://automationexercise.com/",
      setupNodeEvents(on, config) {
        // Load environment variables from .env file
        config.env = config.env || {};
        
        // Set environment variables from .env
        config.env.apiUrl = process.env.API_BASE_URL;
        config.env.userEmail = process.env.TEST_USER_EMAIL;
        config.env.userPassword = process.env.TEST_USER_PASSWORD;
        config.env.apiKey = process.env.API_KEY;
        config.env.defaultTimeout = process.env.DEFAULT_TIMEOUT;
        
        return config;
      },
    },
  }),

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
};
