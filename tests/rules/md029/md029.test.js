"use strict";

const rule = require("../../../lib/rules/md029");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD029 (default)", rule, {
  valid: [testCaseDefault.valid("ordered"), testCaseDefault.valid("one")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Ordered list item prefix: Expected: 2; Actual: 3; Style: 1/2/3",
    ]),
    testCaseDefault.invalid("zero", [
      "Ordered list item prefix: Expected: 1; Actual: 0; Style: 1/2/3",
      "Ordered list item prefix: Expected: 2; Actual: 0; Style: 1/2/3",
    ]),
  ],
});

const testCaseStyleOne = getTestCase(__dirname, [{ style: "one" }]);
ruleTester.run("MD029 (style=one)", rule, {
  valid: [testCaseStyleOne.valid("one")],
  invalid: [
    testCaseStyleOne.invalid("ordered", [
      "Ordered list item prefix: Expected: 1; Actual: 2; Style: 1/1/1",
      "Ordered list item prefix: Expected: 1; Actual: 3; Style: 1/1/1",
    ]),
    testCaseStyleOne.invalid("zero", [
      "Ordered list item prefix: Expected: 1; Actual: 0; Style: 1/1/1",
      "Ordered list item prefix: Expected: 1; Actual: 0; Style: 1/1/1",
      "Ordered list item prefix: Expected: 1; Actual: 0; Style: 1/1/1",
    ]),
    testCaseStyleOne.invalid("invalid", [
      "Ordered list item prefix: Expected: 1; Actual: 3; Style: 1/1/1",
    ]),
  ],
});

const testCaseStyleOrdered = getTestCase(__dirname, [{ style: "ordered" }]);
ruleTester.run("MD029 (style=ordered)", rule, {
  valid: [testCaseStyleOrdered.valid("ordered")],
  invalid: [
    testCaseStyleOrdered.invalid("one", [
      "Ordered list item prefix: Expected: 2; Actual: 1; Style: 1/2/3",
      "Ordered list item prefix: Expected: 3; Actual: 1; Style: 1/2/3",
    ]),
    testCaseStyleOrdered.invalid("zero", [
      "Ordered list item prefix: Expected: 1; Actual: 0; Style: 1/2/3",
      "Ordered list item prefix: Expected: 2; Actual: 0; Style: 1/2/3",
    ]),
  ],
});

const testCaseStyleOneOrOrdered = getTestCase(__dirname, [{ style: "one_or_ordered" }]);
ruleTester.run("MD029 (style=one_or_ordered)", rule, {
  valid: [
    testCaseStyleOneOrOrdered.valid("ordered"),
    testCaseStyleOneOrOrdered.valid("one"),
  ],
  invalid: [
    testCaseStyleOneOrOrdered.invalid("invalid", [
      "Ordered list item prefix: Expected: 2; Actual: 3; Style: 1/2/3",
    ]),
    testCaseStyleOneOrOrdered.invalid("zero", [
      "Ordered list item prefix: Expected: 1; Actual: 0; Style: 1/2/3",
      "Ordered list item prefix: Expected: 2; Actual: 0; Style: 1/2/3",
    ]),
  ],
});

const testCaseStyleZero = getTestCase(__dirname, [{ style: "zero" }]);
ruleTester.run("MD029 (style=zero)", rule, {
  valid: [testCaseStyleZero.valid("zero")],
  invalid: [
    testCaseStyleZero.invalid("one", [
      "Ordered list item prefix: Expected: 0; Actual: 1; Style: 0/0/0",
      "Ordered list item prefix: Expected: 0; Actual: 1; Style: 0/0/0",
      "Ordered list item prefix: Expected: 0; Actual: 1; Style: 0/0/0",
    ]),
    testCaseStyleZero.invalid("ordered", [
      "Ordered list item prefix: Expected: 0; Actual: 1; Style: 0/0/0",
      "Ordered list item prefix: Expected: 0; Actual: 2; Style: 0/0/0",
      "Ordered list item prefix: Expected: 0; Actual: 3; Style: 0/0/0",
    ]),
    testCaseStyleZero.invalid("invalid", [
      "Ordered list item prefix: Expected: 0; Actual: 1; Style: 0/0/0",
      "Ordered list item prefix: Expected: 0; Actual: 3; Style: 0/0/0",
    ]),
  ],
});
