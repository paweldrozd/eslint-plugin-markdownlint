"use strict";

const rule = require("../../../lib/rules/md024");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD024 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Multiple headings with the same content [Context: ## Some text]",
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
    testCaseDefault.invalid("siblings_only", [
      "Multiple headings with the same content [Context: ### Features]",
    ]),
    testCaseDefault.invalid("different_nesting", [
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});

const testCaseSiblingsF = getTestCase(__dirname, [
  {
    siblings_only: false,
  },
]);
ruleTester.run("MD024 (siblings_only=false)", rule, {
  valid: [testCaseSiblingsF.valid("valid")],
  invalid: [
    testCaseSiblingsF.invalid("invalid", [
      "Multiple headings with the same content [Context: ## Some text]",
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
    testCaseSiblingsF.invalid("siblings_only", [
      "Multiple headings with the same content [Context: ### Features]",
    ]),
    testCaseSiblingsF.invalid("different_nesting", [
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});

const testCaseSiblingsT = getTestCase(__dirname, [
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
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});
