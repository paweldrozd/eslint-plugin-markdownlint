"use strict";

const rule = require("../../../lib/rules/md047");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD047 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Files should end with a single newline character"],
      "valid"
    ),
  ],
});
