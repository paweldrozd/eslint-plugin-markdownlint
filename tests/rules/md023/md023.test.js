"use strict";

const rule = require("../../../lib/rules/md023");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD023 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Headings must start at the beginning of the line [Context:   # Heading]"],
      "valid"
    ),
  ],
});
