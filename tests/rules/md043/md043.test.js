"use strict";

const rule = require("../../../lib/rules/md043");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

// By default, this rule is disabled

const testCaseNoOptional = getTestCase(__dirname, [
  {
    headings: ["# Head", "## Item", "### Detail"],
  },
]);
ruleTester.run("MD043 (no-optional)", rule, {
  valid: [testCaseNoOptional.valid("no-optional-valid")],
  invalid: [
    testCaseNoOptional.invalid("no-optional-invalid", [
      "Required heading structure: Expected: ### Detail; Actual: ### Details",
    ]),
  ],
});

const testCaseOptional = getTestCase(__dirname, [
  {
    headings: ["# Head", "## Item", "*", "## Foot", "*"],
  },
]);
ruleTester.run("MD043 (optional)", rule, {
  valid: [
    testCaseOptional.valid("optional-valid1"),
    testCaseOptional.valid("optional-valid2"),
  ],
  invalid: [
    testCaseOptional.invalid("optional-invalid", [
      "Required heading structure [Context: ## Foot]",
    ]),
  ],
});
