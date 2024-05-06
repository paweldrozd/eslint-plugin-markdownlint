"use strict";

const rule = require("../../../lib/rules/md040");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD040 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Fenced code blocks should have a language specified [Context: ```]",
      "Fenced code blocks should have a language specified [Context: ```]",
    ]),
  ],
});
