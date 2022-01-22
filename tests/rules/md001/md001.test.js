"use strict";

const rule = require("../../../lib/rules/md001");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCase = getTestCase(__dirname);
ruleTester.run("MD001", rule, {
  valid: [
    testCase.valid("tree"),
    testCase.valid("multiple-top-level"),
    testCase.valid("single-header"),
  ],
  invalid: [
    testCase.invalid("skipped-one-level", [
      "Heading levels should only increment by one level at a time: Expected: h2; Actual: h3",
      "Heading levels should only increment by one level at a time: Expected: h4; Actual: h5",
      "Heading levels should only increment by one level at a time: Expected: h4; Actual: h5",
    ]),
  ],
});
