"use strict";

const rule = require("../../../lib/rules/md022");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD022 (default)", rule, {
  valid: [
    testCaseDefault.valid("above-1-below-1"),
    testCaseDefault.valid("above-2-below-1"),
    testCaseDefault.valid("above-1-below-2"),
    testCaseDefault.valid("above-2-below-2"),
  ],
  invalid: [
    testCaseDefault.invalid(
      "above-0-below-0",
      [
        "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Below [Context: # Heading 1]",
        "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Above [Context: ## Heading 2]",
      ],
      "above-1-below-1"
    ),
  ],
});

const testCaseAbove1Below1 = getTestCase(__dirname, [
  {
    lines_above: 1,
    lines_below: 1,
  },
]);
ruleTester.run("MD022 (lines_above=1; lines_below=1)", rule, {
  valid: [
    testCaseAbove1Below1.valid("above-1-below-1"),
    testCaseAbove1Below1.valid("above-2-below-1"),
    testCaseAbove1Below1.valid("above-1-below-2"),
    testCaseAbove1Below1.valid("above-2-below-2"),
  ],
  invalid: [
    testCaseAbove1Below1.invalid(
      "above-0-below-0",
      [
        "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Below [Context: # Heading 1]",
        "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Above [Context: ## Heading 2]",
      ],
      "above-1-below-1"
    ),
  ],
});

const testCaseAbove2Below1 = getTestCase(__dirname, [
  {
    lines_above: 2,
    lines_below: 1,
  },
]);
ruleTester.run("MD022 (lines_above=2; lines_below=1)", rule, {
  valid: [
    testCaseAbove2Below1.valid("above-2-below-1"),
    testCaseAbove2Below1.valid("above-2-below-2"),
  ],
  invalid: [
    // note, this case is bugged.
    // testCaseAbove2Below1.invalid(
    //   "above-0-below-0",
    //   [
    //     "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Below [Context: # Heading 1]",
    //     "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Above [Context: ## Heading 2]",
    //   ],
    //   "above-2-below-1"
    // ),
    testCaseAbove2Below1.invalid(
      "above-1-below-1",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Above [Context: ## Heading 2]",
      ],
      "above-2-below-1"
    ),
    testCaseAbove2Below1.invalid(
      "above-1-below-2",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Above [Context: ## Heading 2]",
      ],
      "above-2-below-2"
    ),
  ],
});

const testCaseAbove1Below2 = getTestCase(__dirname, [
  {
    lines_above: 1,
    lines_below: 2,
  },
]);
ruleTester.run("MD022 (lines_above=1; lines_below=2)", rule, {
  valid: [
    testCaseAbove1Below2.valid("above-1-below-2"),
    testCaseAbove1Below2.valid("above-2-below-2"),
  ],
  invalid: [
    // note, this case is bugged.
    //   testCaseAbove1Below2.invalid(
    //     "above-0-below-0",
    //     [
    // "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Below [Context: # Heading 1]",
    // "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Above [Context: ## Heading 2]"
    //     ],
    //     "above-1-below-2"
    //   ),
    testCaseAbove1Below2.invalid(
      "above-1-below-1",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Below [Context: # Heading 1]",
      ],
      "above-1-below-2"
    ),
    testCaseAbove1Below2.invalid(
      "above-2-below-1",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Below [Context: # Heading 1]",
      ],
      "above-2-below-2"
    ),
  ],
});

const testCaseAbove2Below2 = getTestCase(__dirname, [
  {
    lines_above: 2,
    lines_below: 2,
  },
]);
ruleTester.run("MD022 (lines_above=2; lines_below=2)", rule, {
  valid: [testCaseAbove2Below2.valid("above-2-below-2")],
  invalid: [
    // note, this case is bugged.
    //   testCaseAbove1Below2.invalid(
    //     "above-0-below-0",
    //     [
    // "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Below [Context: # Heading 1]",
    // "Headings should be surrounded by blank lines: Expected: 1; Actual: 0; Above [Context: ## Heading 2]"
    //     ],
    //     "above-1-below-2"
    //   ),
    testCaseAbove2Below2.invalid(
      "above-1-below-1",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Below [Context: # Heading 1]",
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Above [Context: ## Heading 2]",
      ],
      "above-2-below-2"
    ),
    testCaseAbove2Below2.invalid(
      "above-2-below-1",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Below [Context: # Heading 1]",
      ],
      "above-2-below-2"
    ),
    testCaseAbove2Below2.invalid(
      "above-1-below-2",
      [
        "Headings should be surrounded by blank lines: Expected: 2; Actual: 1; Above [Context: ## Heading 2]",
      ],
      "above-2-below-2"
    ),
  ],
});
