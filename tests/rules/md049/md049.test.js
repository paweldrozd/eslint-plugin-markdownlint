"use strict";

const rule = require("../../../lib/rules/md049");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD049 (default)", rule, {
  valid: [testCaseDefault.valid("asterisk"), testCaseDefault.valid("underscore")],
  invalid: [
    testCaseDefault.invalid(
      "mixed",
      ["Emphasis style should be consistent: Expected: asterisk; Actual: underscore"],
      "asterisk"
    ),
  ],
});

const testCaseConsistent = getTestCase(__dirname, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD049 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("asterisk"), testCaseConsistent.valid("underscore")],
  invalid: [
    testCaseConsistent.invalid(
      "mixed",
      ["Emphasis style should be consistent: Expected: asterisk; Actual: underscore"],
      "asterisk"
    ),
  ],
});

const testCaseAsterisk = getTestCase(__dirname, [
  {
    style: "asterisk",
  },
]);
ruleTester.run("MD049 (style='asterisk')", rule, {
  valid: [testCaseAsterisk.valid("asterisk")],
  invalid: [
    testCaseAsterisk.invalid(
      "underscore",
      [
        "Emphasis style should be consistent: Expected: asterisk; Actual: underscore",
        "Emphasis style should be consistent: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "mixed",
      ["Emphasis style should be consistent: Expected: asterisk; Actual: underscore"],
      "asterisk"
    ),
  ],
});

const testCaseUnderscore = getTestCase(__dirname, [
  {
    style: "underscore",
  },
]);
ruleTester.run("MD049 (style='underscore')", rule, {
  valid: [testCaseUnderscore.valid("underscore")],
  invalid: [
    testCaseUnderscore.invalid(
      "asterisk",
      [
        "Emphasis style should be consistent: Expected: underscore; Actual: asterisk",
        "Emphasis style should be consistent: Expected: underscore; Actual: asterisk",
      ],
      "underscore"
    ),
    testCaseUnderscore.invalid(
      "mixed",
      ["Emphasis style should be consistent: Expected: underscore; Actual: asterisk"],
      "underscore"
    ),
  ],
});
