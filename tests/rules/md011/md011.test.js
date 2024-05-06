"use strict";

const rule = require("../../../lib/rules/md011");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD011", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Reversed link syntax: (Example)[https://www.example.com/]"],
      "valid"
    ),
  ],
});
