"use strict";

const rule = require("../../../lib/rules/md032");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD032 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Lists should be surrounded by blank lines [Context: * Some]"],
      "valid"
    ),
  ],
});
