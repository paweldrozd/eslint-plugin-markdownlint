"use strict";

const rule = require("../../../lib/rules/md038");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD038 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside code span elements [Context: `some text `]",
        "Spaces inside code span elements [Context: ` some text`]",
      ],
      "valid"
    ),
  ],
});
