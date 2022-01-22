"use strict";

const rule = require("../../../lib/rules/md026");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD026 (default)", rule, {
  valid: [testCaseDefault.valid("valid"), testCaseDefault.valid("dash")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Trailing punctuation in heading: Punctuation: '.'"],
      "valid"
    ),
  ],
});

const testCasePunctuationDefault = getTestCase(__dirname, [
  {
    punctuation: ".,;:!。，；：！",
  },
]);
ruleTester.run("MD026 (punctuation=default-chars)", rule, {
  valid: [
    testCasePunctuationDefault.valid("valid"),
    testCasePunctuationDefault.valid("dash"),
  ],
  invalid: [
    testCasePunctuationDefault.invalid(
      "invalid",
      ["Trailing punctuation in heading: Punctuation: '.'"],
      "valid"
    ),
  ],
});

const testCasePunctuationCustom = getTestCase(__dirname, [
  {
    punctuation: "-",
  },
]);
ruleTester.run("MD026 (punctuation=custom-chars)", rule, {
  valid: [
    testCasePunctuationCustom.valid("valid"),
    testCasePunctuationCustom.valid("invalid"),
  ],
  invalid: [
    testCasePunctuationCustom.invalid(
      "dash",
      ["Trailing punctuation in heading: Punctuation: '-'"],
      "valid"
    ),
  ],
});
