"use strict";

const rule = require("../../../lib/rules/md005");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCase = getTestCase(__dirname);
ruleTester.run("MD005", rule, {
  valid: [testCase.valid("correct")],
  invalid: [
    testCase.invalid("incorrect", [
      "Inconsistent indentation for list items at the same level: Expected: 2; Actual: 3",
    ]),
  ],
});
