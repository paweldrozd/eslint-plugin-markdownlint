"use strict";

const rule = require("../../../lib/rules/md028");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD028 (default)", rule, {
  valid: [testCaseDefault.valid("valid1"), testCaseDefault.valid("valid2")],
  invalid: [testCaseDefault.invalid("invalid", ["Blank line inside blockquote"])],
});
