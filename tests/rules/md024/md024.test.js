"use strict";

const rule = require("../../../lib/rules/md024");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

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

const testCaseSiblingsFNestingF = getTestCase(__dirname, [
  {
    siblings_only: false,
    allow_different_nesting: false,
  },
]);
ruleTester.run("MD024 (siblings_only=false; allow_different_nesting=false)", rule, {
  valid: [testCaseSiblingsFNestingF.valid("valid")],
  invalid: [
    testCaseSiblingsFNestingF.invalid("invalid", [
      "Multiple headings with the same content [Context: ## Some text]",
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
    testCaseSiblingsFNestingF.invalid("siblings_only", [
      "Multiple headings with the same content [Context: ### Features]",
    ]),
    testCaseSiblingsFNestingF.invalid("different_nesting", [
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});

const testCaseSiblingsTNestingF = getTestCase(__dirname, [
  {
    siblings_only: true,
    allow_different_nesting: false,
  },
]);
ruleTester.run("MD024 (siblings_only=true; allow_different_nesting=false)", rule, {
  valid: [
    testCaseSiblingsTNestingF.valid("valid"),
    testCaseSiblingsTNestingF.valid("siblings_only"),
    testCaseSiblingsTNestingF.valid("different_nesting"),
  ],
  invalid: [
    testCaseSiblingsTNestingF.invalid("invalid", [
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});

const testCaseSiblingsFNestingT = getTestCase(__dirname, [
  {
    siblings_only: false,
    allow_different_nesting: true,
  },
]);
ruleTester.run("MD024 (siblings_only=false; allow_different_nesting=true)", rule, {
  valid: [
    testCaseSiblingsFNestingT.valid("valid"),
    testCaseSiblingsFNestingT.valid("siblings_only"),
    testCaseSiblingsFNestingT.valid("different_nesting"),
  ],
  invalid: [
    testCaseSiblingsFNestingT.invalid("invalid", [
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});

const testCaseSiblingsTNestingT = getTestCase(__dirname, [
  {
    siblings_only: true,
    allow_different_nesting: true,
  },
]);
ruleTester.run("MD024 (siblings_only=true; allow_different_nesting=true)", rule, {
  valid: [
    testCaseSiblingsTNestingT.valid("valid"),
    testCaseSiblingsTNestingT.valid("siblings_only"),
    testCaseSiblingsTNestingT.valid("different_nesting"),
  ],
  invalid: [
    testCaseSiblingsTNestingT.invalid("invalid", [
      "Multiple headings with the same content [Context: ## Some text]",
    ]),
  ],
});
