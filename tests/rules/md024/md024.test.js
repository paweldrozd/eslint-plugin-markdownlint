import rule from "../../../lib/rules/md024.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md024");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD024 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Multiple headings with the same content [Context: Some text]",
      "Multiple headings with the same content [Context: Some text]",
    ]),
    testCaseDefault.invalid("siblings_only", [
      "Multiple headings with the same content [Context: Features]",
    ]),
    testCaseDefault.invalid("different_nesting", [
      "Multiple headings with the same content [Context: Some text]",
    ]),
  ],
});

const testCaseSiblingsF = getTestCase(dirName, [
  {
    siblings_only: false,
  },
]);
ruleTester.run("MD024 (siblings_only=false)", rule, {
  valid: [testCaseSiblingsF.valid("valid")],
  invalid: [
    testCaseSiblingsF.invalid("invalid", [
      "Multiple headings with the same content [Context: Some text]",
      "Multiple headings with the same content [Context: Some text]",
    ]),
    testCaseSiblingsF.invalid("siblings_only", [
      "Multiple headings with the same content [Context: Features]",
    ]),
    testCaseSiblingsF.invalid("different_nesting", [
      "Multiple headings with the same content [Context: Some text]",
    ]),
  ],
});

const testCaseSiblingsT = getTestCase(dirName, [
  {
    siblings_only: true,
  },
]);
ruleTester.run("MD024 (siblings_only=true)", rule, {
  valid: [
    testCaseSiblingsT.valid("valid"),
    testCaseSiblingsT.valid("siblings_only"),
    testCaseSiblingsT.valid("different_nesting"),
  ],
  invalid: [
    testCaseSiblingsT.invalid("invalid", [
      "Multiple headings with the same content [Context: Some text]",
    ]),
  ],
});
