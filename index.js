var rules = require('./rules');

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      version: "16.0"
    }
  },
  rules: rules,
  plugins: ['react'],
};
