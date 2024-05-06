"use strict";

const rule = require("../../../lib/rules/md034");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD034 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Bare URL used [Context: https://www.example.com/]"],
      "valid"
    ),
  ],
});
