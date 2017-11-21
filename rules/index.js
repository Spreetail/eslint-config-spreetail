var bestPractices = require('./best-practices');
var ecmascript6 = require('./ecmascript-6');
var possibleErrors = require('./possible-errors');
var strictMode = require('./strict-mode');
var stylisticIssues = require('./stylistic-issues');
var variables = require('./variables');
var jsx = require('./react/jsx');
var react = require('./react/react');

var allRules = {};
var hasOwn = Object.prototype.hasOwnProperty;

[
  bestPractices,
  ecmascript6,
  possibleErrors,
  strictMode,
  stylisticIssues,
  variables,
  jsx,
  react,
].forEach(function(rules) {
  for (var key in rules) {
    if (hasOwn.call(rules, key)) {
      allRules[key] = rules[key];
    }
  }
});

module.exports = allRules;
