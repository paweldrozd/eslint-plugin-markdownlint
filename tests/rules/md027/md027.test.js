"use strict";

const rule = require("../../../lib/rules/md027");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD027 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Multiple spaces after blockquote symbol [Context: >  This is a blockquote with]",
        "Multiple spaces after blockquote symbol [Context: >  indentation.]",
      ],
      "valid"
    ),
  ],
});
