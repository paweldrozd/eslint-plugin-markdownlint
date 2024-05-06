"use strict";

const rule = require("../../../lib/rules/md037");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD037 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Spaces inside emphasis markers [Context: ** b]",
        "Spaces inside emphasis markers [Context: d **]",
        "Spaces inside emphasis markers [Context: * i]",
        "Spaces inside emphasis markers [Context: c *]",
        "Spaces inside emphasis markers [Context: __ b]",
        "Spaces inside emphasis markers [Context: d __]",
        "Spaces inside emphasis markers [Context: _ i]",
        "Spaces inside emphasis markers [Context: c _]",
      ],
      "valid"
    ),
  ],
});
