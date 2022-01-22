"use strict";

const rule = require("../../../lib/rules/md036");
const RuleTester = require("eslint").RuleTester;
const { getTestCase } = require("../../utils");

const ruleTester = new RuleTester({
  parser: require.resolve("../../../parser"),
});

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD036 (default)", rule, {
  valid: [
    testCaseDefault.valid("valid"),
    testCaseDefault.valid("invalid-with-punctuation"),
  ],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Emphasis used instead of a heading [Context: My document]",
      "Emphasis used instead of a heading [Context: Another section]",
    ]),
  ],
});

const testCaseDefaultPunctuation = getTestCase(__dirname, [
  {
    punctuation: ".,;:!?。，；：！？",
  },
]);
ruleTester.run("MD036 (punctuation='.,;:!?。，；：！？')", rule, {
  valid: [
    testCaseDefaultPunctuation.valid("valid"),
    testCaseDefaultPunctuation.valid("invalid-with-punctuation"),
  ],
  invalid: [
    testCaseDefaultPunctuation.invalid("invalid", [
      "Emphasis used instead of a heading [Context: My document]",
      "Emphasis used instead of a heading [Context: Another section]",
    ]),
  ],
});

const testCaseEmptyPunctuation = getTestCase(__dirname, [
  {
    punctuation: "",
  },
]);
ruleTester.run("MD036 (punctuation='')", rule, {
  valid: [testCaseEmptyPunctuation.valid("valid")],
  invalid: [
    testCaseEmptyPunctuation.invalid("invalid", [
      "Emphasis used instead of a heading [Context: My document]",
      "Emphasis used instead of a heading [Context: Another section]",
    ]),
    testCaseEmptyPunctuation.invalid("invalid-with-punctuation", [
      "Emphasis used instead of a heading [Context: My document:]",
      "Emphasis used instead of a heading [Context: Another section:]",
    ]),
  ],
});
