import rule from "../../../lib/rules/md043.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md043");

// By default, this rule is disabled

const testCaseNoOptional = getTestCase(dirName, [
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

const testCaseOptional = getTestCase(dirName, [
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
