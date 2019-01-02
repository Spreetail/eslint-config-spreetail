var rules = require('./rules');

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "16.0"
    }
  },
  rules: rules,
  plugins: ['react'],
};
