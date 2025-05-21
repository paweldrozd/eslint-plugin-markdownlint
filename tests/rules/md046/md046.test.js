import rule from "../../../lib/rules/md046.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md046");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD046 (default)", rule, {
  valid: [testCaseDefault.valid("indented"), testCaseDefault.valid("fenced")],
  invalid: [
    testCaseDefault.invalid("mixed", [
      "Code block style: Expected: indented; Actual: fenced",
    ]),
  ],
});

const testCaseConsistent = getTestCase(dirName, [
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

const testCaseFenced = getTestCase(dirName, [
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

const testCaseIndented = getTestCase(dirName, [
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
