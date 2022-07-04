"use strict";

const rule = require("../../../lib/rules/md042");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD042 (default)", rule, {
  valid: [testCaseDefault.valid("valid-link"), testCaseDefault.valid("valid-fragment")],
  invalid: [
    testCaseDefault.invalid("invalid-link", [
      "No empty links [Context: [an empty link]()]",
    ]),
    testCaseDefault.invalid("invalid-fragment", [
      "No empty links [Context: [an empty fragment](#)]",
    ]),
  ],
});
