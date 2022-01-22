"use strict";

const rule = require("../../../lib/rules/md027");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD027 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Multiple spaces after blockquote symbol [Context: >  This is a blockquote with]",
        "Multiple spaces after blockquote symbol [Context: >  indentation.]",
      ],
      "valid"
    ),
  ],
});
