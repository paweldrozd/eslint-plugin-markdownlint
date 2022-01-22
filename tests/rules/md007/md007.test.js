"use strict";

const rule = require("../../../lib/rules/md007");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD007 (default)", rule, {
  valid: [testCaseDefault.valid("indent2")],
  invalid: [
    testCaseDefault.invalid(
      "indent2-start",
      [
        "Unordered list indentation: Expected: 0; Actual: 2",
        "Unordered list indentation: Expected: 2; Actual: 4",
        "Unordered list indentation: Expected: 4; Actual: 6",
        "Unordered list indentation: Expected: 0; Actual: 2",
        "Unordered list indentation: Expected: 2; Actual: 4",
        "Unordered list indentation: Expected: 4; Actual: 6",
      ],
      "indent2"
    ),
    testCaseDefault.invalid(
      "indent3",
      [
        "Unordered list indentation: Expected: 2; Actual: 3",
        "Unordered list indentation: Expected: 4; Actual: 6",
        "Unordered list indentation: Expected: 2; Actual: 3",
        "Unordered list indentation: Expected: 4; Actual: 6",
      ],
      "indent2"
    ),
    testCaseDefault.invalid(
      "indent3-start",
      [
        "Unordered list indentation: Expected: 0; Actual: 3",
        "Unordered list indentation: Expected: 2; Actual: 6",
        "Unordered list indentation: Expected: 4; Actual: 9",
        "Unordered list indentation: Expected: 0; Actual: 3",
        "Unordered list indentation: Expected: 2; Actual: 6",
        "Unordered list indentation: Expected: 4; Actual: 9",
      ],
      "indent2"
    ),
    testCaseDefault.invalid(
      "mixed",
      [
        "Unordered list indentation: Expected: 4; Actual: 5",
        "Unordered list indentation: Expected: 0; Actual: 1",
        "Unordered list indentation: Expected: 2; Actual: 4",
        "Unordered list indentation: Expected: 4; Actual: 6",
      ],
      "indent2"
    ),
  ],
});

const testCaseIndent2 = getTestCase(__dirname, [{ indent: 2, start_indented: false }]);
ruleTester.run("MD007 (indent=2, start_indented=false)", rule, {
  valid: [testCaseIndent2.valid("indent2")],
  invalid: [
    testCaseDefault.invalid(
      "indent2-start",
      [
        "Unordered list indentation: Expected: 0; Actual: 2",
        "Unordered list indentation: Expected: 2; Actual: 4",
        "Unordered list indentation: Expected: 4; Actual: 6",
        "Unordered list indentation: Expected: 0; Actual: 2",
        "Unordered list indentation: Expected: 2; Actual: 4",
        "Unordered list indentation: Expected: 4; Actual: 6",
      ],
      "indent2"
    ),
    testCaseDefault.invalid(
      "indent3",
      [
        "Unordered list indentation: Expected: 2; Actual: 3",
        "Unordered list indentation: Expected: 4; Actual: 6",
        "Unordered list indentation: Expected: 2; Actual: 3",
        "Unordered list indentation: Expected: 4; Actual: 6",
      ],
      "indent2"
    ),
    testCaseDefault.invalid(
      "indent3-start",
      [
        "Unordered list indentation: Expected: 0; Actual: 3",
        "Unordered list indentation: Expected: 2; Actual: 6",
        "Unordered list indentation: Expected: 4; Actual: 9",
        "Unordered list indentation: Expected: 0; Actual: 3",
        "Unordered list indentation: Expected: 2; Actual: 6",
        "Unordered list indentation: Expected: 4; Actual: 9",
      ],
      "indent2"
    ),
    testCaseDefault.invalid(
      "mixed",
      [
        "Unordered list indentation: Expected: 4; Actual: 5",
        "Unordered list indentation: Expected: 0; Actual: 1",
        "Unordered list indentation: Expected: 2; Actual: 4",
        "Unordered list indentation: Expected: 4; Actual: 6",
      ],
      "indent2"
    ),
  ],
});

const testCaseIndent2Start = getTestCase(__dirname, [
  { indent: 2, start_indented: true },
]);
ruleTester.run("MD007 (indent=2, start_indented=true)", rule, {
  valid: [testCaseIndent2Start.valid("indent2-start")],
  invalid: [
    testCaseIndent2Start.invalid(
      "indent2",
      [
        "Unordered list indentation: Expected: 2; Actual: 0",
        "Unordered list indentation: Expected: 4; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 4",
        "Unordered list indentation: Expected: 2; Actual: 0",
        "Unordered list indentation: Expected: 4; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 4",
      ],
      "indent2-start"
    ),
    testCaseIndent2Start.invalid(
      "indent3",
      [
        "Unordered list indentation: Expected: 2; Actual: 0",
        "Unordered list indentation: Expected: 4; Actual: 3",
        "Unordered list indentation: Expected: 2; Actual: 0",
        "Unordered list indentation: Expected: 4; Actual: 3",
      ],
      "indent2-start"
    ),
    testCaseIndent2Start.invalid(
      "indent3-start",
      [
        "Unordered list indentation: Expected: 2; Actual: 3",
        "Unordered list indentation: Expected: 4; Actual: 6",
        "Unordered list indentation: Expected: 6; Actual: 9",
        "Unordered list indentation: Expected: 2; Actual: 3",
        "Unordered list indentation: Expected: 4; Actual: 6",
        "Unordered list indentation: Expected: 6; Actual: 9",
      ],
      "indent2-start"
    ),
    testCaseIndent2Start.invalid(
      "mixed",
      [
        "Unordered list indentation: Expected: 2; Actual: 0",
        "Unordered list indentation: Expected: 4; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 5",
        "Unordered list indentation: Expected: 2; Actual: 1",
      ],
      "indent2-start"
    ),
  ],
});

const testCaseIndent3 = getTestCase(__dirname, [{ indent: 3, start_indented: false }]);
ruleTester.run("MD007 (indent=3, start_indented=false)", rule, {
  valid: [testCaseIndent3.valid("indent3")],
  invalid: [
    testCaseIndent3.invalid(
      "indent2",
      [
        "Unordered list indentation: Expected: 3; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 4",
        "Unordered list indentation: Expected: 3; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 4",
      ],
      "indent3"
    ),
    testCaseIndent3.invalid(
      "indent2-start",
      [
        "Unordered list indentation: Expected: 0; Actual: 2",
        "Unordered list indentation: Expected: 3; Actual: 4",
        "Unordered list indentation: Expected: 0; Actual: 2",
        "Unordered list indentation: Expected: 3; Actual: 4",
      ],
      "indent3"
    ),
    testCaseIndent3.invalid(
      "indent3-start",
      [
        "Unordered list indentation: Expected: 0; Actual: 3",
        "Unordered list indentation: Expected: 3; Actual: 6",
        "Unordered list indentation: Expected: 6; Actual: 9",
        "Unordered list indentation: Expected: 0; Actual: 3",
        "Unordered list indentation: Expected: 3; Actual: 6",
        "Unordered list indentation: Expected: 6; Actual: 9",
      ],
      "indent3"
    ),
    testCaseIndent3.invalid(
      "mixed",
      [
        "Unordered list indentation: Expected: 3; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 5",
        "Unordered list indentation: Expected: 0; Actual: 1",
        "Unordered list indentation: Expected: 3; Actual: 4",
      ],
      "indent3"
    ),
  ],
});

const testCaseIndent3Start = getTestCase(__dirname, [
  { indent: 3, start_indented: true },
]);
ruleTester.run("MD007 (indent=3, start_indented=true)", rule, {
  valid: [testCaseIndent3Start.valid("indent3-start")],
  invalid: [
    testCaseIndent3Start.invalid(
      "indent2",
      [
        "Unordered list indentation: Expected: 3; Actual: 0",
        "Unordered list indentation: Expected: 6; Actual: 2",
        "Unordered list indentation: Expected: 9; Actual: 4",
        "Unordered list indentation: Expected: 3; Actual: 0",
        "Unordered list indentation: Expected: 6; Actual: 2",
        "Unordered list indentation: Expected: 9; Actual: 4",
      ],
      "indent3-start"
    ),
    testCaseIndent3Start.invalid(
      "indent2-start",
      [
        "Unordered list indentation: Expected: 3; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 4",
        "Unordered list indentation: Expected: 9; Actual: 6",
        "Unordered list indentation: Expected: 3; Actual: 2",
        "Unordered list indentation: Expected: 6; Actual: 4",
        "Unordered list indentation: Expected: 9; Actual: 6",
      ],
      "indent3-start"
    ),
    testCaseIndent3Start.invalid(
      "indent3",
      [
        "Unordered list indentation: Expected: 3; Actual: 0",
        "Unordered list indentation: Expected: 6; Actual: 3",
        "Unordered list indentation: Expected: 9; Actual: 6",
        "Unordered list indentation: Expected: 3; Actual: 0",
        "Unordered list indentation: Expected: 6; Actual: 3",
        "Unordered list indentation: Expected: 9; Actual: 6",
      ],
      "indent3-start"
    ),
    testCaseIndent3Start.invalid(
      "mixed",
      [
        "Unordered list indentation: Expected: 3; Actual: 0",
        "Unordered list indentation: Expected: 6; Actual: 2",
        "Unordered list indentation: Expected: 9; Actual: 5",
        "Unordered list indentation: Expected: 3; Actual: 1",
        "Unordered list indentation: Expected: 6; Actual: 4",
        "Unordered list indentation: Expected: 9; Actual: 6",
      ],
      "indent3-start"
    ),
  ],
});
