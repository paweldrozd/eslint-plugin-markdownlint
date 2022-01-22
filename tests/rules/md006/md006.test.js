"use strict";

const rule = require("../../../lib/rules/md006");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCase = getTestCase(__dirname);
ruleTester.run("MD006", rule, {
  valid: [testCase.valid("correct")],
  invalid: [
    testCase.invalid(
      "incorrect",
      [
        "Consider starting bulleted lists at the beginning of the line: Expected: 0; Actual: 2",
        "Consider starting bulleted lists at the beginning of the line: Expected: 0; Actual: 2",
      ],
      "correct"
    ),
  ],
});
