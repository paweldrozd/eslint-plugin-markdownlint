"use strict";

const rule = require("../../../lib/rules/md050");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD050 (default)", rule, {
  valid: [testCaseDefault.valid("asterisk"), testCaseDefault.valid("underscore")],
  invalid: [
    testCaseDefault.invalid(
      "mixed",
      [
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseConsistent = getTestCase(__dirname, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD050 (style='consistent')", rule, {
  valid: [testCaseConsistent.valid("asterisk"), testCaseConsistent.valid("underscore")],
  invalid: [
    testCaseConsistent.invalid(
      "mixed",
      [
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

const testCaseAsterisk = getTestCase(__dirname, [
  {
    style: "asterisk",
  },
]);
ruleTester.run("MD050 (style='asterisk')", rule, {
  valid: [testCaseAsterisk.valid("asterisk")],
  invalid: [
    testCaseAsterisk.invalid(
      "underscore",
      [
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
    testCaseAsterisk.invalid(
      "mixed",
      [
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
        "Strong style should be consistent: Expected: asterisk; Actual: underscore",
      ],
      "asterisk"
    ),
  ],
});

// TODO: check on next iteration
// const testCaseUnderscore = getTestCase(__dirname, [
//   {
//     style: "underscore",
//   },
// ]);
// ruleTester.run("MD050 (style='underscore')", rule, {
//   valid: [testCaseUnderscore.valid("underscore")],
//   invalid: [
//     testCaseUnderscore.invalid(
//       "asterisk",
//       [
//         "Strong style should be consistent: Expected: underscore; Actual: asterisk",
//         "Strong style should be consistent: Expected: underscore; Actual: asterisk",
//       ],
//       "underscore"
//     ),
//     testCaseUnderscore.invalid(
//       "mixed",
//       ["Strong style should be consistent: Expected: underscore; Actual: asterisk"],
//       "underscore"
//     ),
//   ],
// });
