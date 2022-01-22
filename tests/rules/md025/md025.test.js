"use strict";

const rule = require("../../../lib/rules/md025");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD025 (level=1; front_matter_title=default-regex)", rule, {
  valid: [testCaseDefault.valid("valid"), testCaseDefault.valid("front_matter_valid")],
  invalid: [
    testCaseDefault.invalid("invalid_h1", [
      "Multiple top-level headings in the same document [Context: # First chapter]",
    ]),
    testCaseDefault.invalid("front_matter_invalid", [
      "Multiple top-level headings in the same document [Context: # First chapter]",
    ]),
  ],
});

const testCaseLevel1FmDefault = getTestCase(__dirname, [
  {
    level: 1,
    front_matter_title: '^s*"?title"?s*[:=]',
  },
]);
ruleTester.run("MD025 (level=1; front_matter_title=default-regex)", rule, {
  valid: [
    testCaseLevel1FmDefault.valid("valid"),
    testCaseLevel1FmDefault.valid("front_matter_valid"),
  ],
  invalid: [
    testCaseLevel1FmDefault.invalid("invalid_h1", [
      "Multiple top-level headings in the same document [Context: # First chapter]",
    ]),
    testCaseLevel1FmDefault.invalid("front_matter_invalid", [
      "Multiple top-level headings in the same document [Context: # First chapter]",
    ]),
  ],
});

const testCaseLevel2FmDefault = getTestCase(__dirname, [
  {
    level: 2,
    front_matter_title: '^s*"?title"?s*[:=]',
  },
]);
ruleTester.run("MD025 (level=2; front_matter_title=default-regex)", rule, {
  valid: [
    testCaseLevel2FmDefault.valid("valid"),
    testCaseLevel2FmDefault.valid("front_matter_invalid"),
  ],
  invalid: [
    testCaseLevel2FmDefault.invalid("invalid_h2", [
      "Multiple top-level headings in the same document [Context: ## First chapter]",
    ]),
    testCaseLevel2FmDefault.invalid("front_matter_valid", [
      "Multiple top-level headings in the same document [Context: ## First chapter]",
    ]),
  ],
});

const testCaseLevel1FmCustom = getTestCase(__dirname, [
  {
    level: 1,
    front_matter_title: '^s*"?custom"?s*[:=]',
  },
]);
ruleTester.run("MD025 (level=1; front_matter_title=custom-regex)", rule, {
  valid: [
    testCaseLevel1FmCustom.valid("valid"),
    testCaseLevel1FmCustom.valid("front_matter_valid"),
    testCaseLevel1FmCustom.valid("front_matter_invalid"),
  ],
  invalid: [
    testCaseLevel1FmCustom.invalid("invalid_h1", [
      "Multiple top-level headings in the same document [Context: # First chapter]",
    ]),
    testCaseLevel1FmCustom.invalid("front_matter_custom", [
      "Multiple top-level headings in the same document [Context: # First chapter]",
    ]),
  ],
});
