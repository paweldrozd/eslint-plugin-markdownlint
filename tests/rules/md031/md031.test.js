"use strict";

const rule = require("../../../lib/rules/md031");
const { getTestCase } = require("../../utils");

const { ruleTester } = require("../ruleTester");

const testCaseDefault = getTestCase(__dirname);
ruleTester.run("MD031 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      [
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
      ],
      "valid"
    ),
    testCaseDefault.invalid(
      "valid-without-lists",
      ["Fenced code blocks should be surrounded by blank lines [Context: ```]"],
      "valid"
    ),
  ],
});

const testCaseListItemTrue = getTestCase(__dirname, [
  {
    list_items: true,
  },
]);
ruleTester.run("MD031 (list_items=true)", rule, {
  valid: [testCaseListItemTrue.valid("valid")],
  invalid: [
    testCaseListItemTrue.invalid(
      "invalid",
      [
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
      ],
      "valid"
    ),
    testCaseListItemTrue.invalid(
      "valid-without-lists",
      ["Fenced code blocks should be surrounded by blank lines [Context: ```]"],
      "valid"
    ),
  ],
});

const testCaseListItemFalse = getTestCase(__dirname, [
  {
    list_items: false,
  },
]);
ruleTester.run("MD031 (list_items=false)", rule, {
  valid: [
    testCaseListItemFalse.valid("valid"),
    testCaseListItemFalse.valid("valid-without-lists"),
  ],
  invalid: [
    testCaseListItemFalse.invalid(
      "invalid",
      [
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
        "Fenced code blocks should be surrounded by blank lines [Context: ```]",
      ],
      "valid-without-lists"
    ),
  ],
});
