"use strict";

const rule = require("../../../lib/rules/md028");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD028 (default)", rule, {
  valid: [testCaseDefault.valid("valid1"), testCaseDefault.valid("valid2")],
  invalid: [testCaseDefault.invalid("invalid", ["Blank line inside blockquote"])],
});
