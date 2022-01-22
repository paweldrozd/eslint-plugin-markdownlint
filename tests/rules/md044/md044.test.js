"use strict";

const rule = require("../../../lib/rules/md044");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

// By default, this rule is disabled

const testCaseJavaScript = getTestCase(__dirname, [
  {
    names: ["JavaScript"],
    code_blocks: true,
  },
]);
ruleTester.run("MD044 (names=['JavaScript'], code_blocks=true)", rule, {
  valid: [testCaseJavaScript.valid("valid")],
  invalid: [
    testCaseJavaScript.invalid(
      "invalid",
      [
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javascript",
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javaScript",
      ],
      "valid"
    ),
    testCaseJavaScript.invalid(
      "valid-without-cb",
      [
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javaScript",
      ],
      "valid"
    ),
  ],
});

const testCaseJavaScriptWithoutCb = getTestCase(__dirname, [
  {
    names: ["JavaScript"],
    code_blocks: false,
  },
]);
ruleTester.run("MD044 (names=['JavaScript'], code_blocks=true)", rule, {
  valid: [
    testCaseJavaScriptWithoutCb.valid("valid"),
    testCaseJavaScriptWithoutCb.valid("valid-without-cb"),
  ],
  invalid: [
    testCaseJavaScriptWithoutCb.invalid(
      "invalid",
      [
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javascript",
      ],
      "valid-without-cb"
    ),
  ],
});
