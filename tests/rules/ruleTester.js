const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require("../../parser"),
  },
});

module.exports = { ruleTester };
