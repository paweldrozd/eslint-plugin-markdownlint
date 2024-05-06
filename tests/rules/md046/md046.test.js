"use strict";

const rule = require("../../../lib/rules/md046");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD046 (default)", rule, {
  valid: [testCaseDefault.valid("indented"), testCaseDefault.valid("fenced")],
  invalid: [
    testCaseDefault.invalid("mixed", [
      "Code block style: Expected: indented; Actual: fenced",
    ]),
  ],
});

const testCaseConsistent = getTestCase(__dirname, [
  {
    style: "consistent",
  },
]);
ruleTester.run("MD046 (style='indented')", rule, {
  valid: [testCaseConsistent.valid("indented"), testCaseConsistent.valid("fenced")],
  invalid: [
    testCaseConsistent.invalid("mixed", [
      "Code block style: Expected: indented; Actual: fenced",
    ]),
  ],
});

const testCaseFenced = getTestCase(__dirname, [
  {
    style: "fenced",
  },
]);
ruleTester.run("MD046 (style='fenced')", rule, {
  valid: [testCaseFenced.valid("fenced")],
  invalid: [
    testCaseFenced.invalid("indented", [
      "Code block style: Expected: fenced; Actual: indented",
      "Code block style: Expected: fenced; Actual: indented",
    ]),
    testCaseFenced.invalid("mixed", [
      "Code block style: Expected: fenced; Actual: indented",
    ]),
  ],
});

const testCaseIndented = getTestCase(__dirname, [
  {
    style: "indented",
  },
]);
ruleTester.run("MD046 (style='indented')", rule, {
  valid: [testCaseIndented.valid("indented")],
  invalid: [
    testCaseIndented.invalid("fenced", [
      "Code block style: Expected: indented; Actual: fenced",
      "Code block style: Expected: indented; Actual: fenced",
    ]),
    testCaseIndented.invalid("mixed", [
      "Code block style: Expected: indented; Actual: fenced",
    ]),
  ],
});
