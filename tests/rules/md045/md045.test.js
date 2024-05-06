"use strict";

const rule = require("../../../lib/rules/md045");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD045 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Images should have alternate text (alt text)",
      "Images should have alternate text (alt text)",
    ]),
  ],
});
