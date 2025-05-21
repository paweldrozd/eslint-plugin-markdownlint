import rule from "../../../lib/rules/md031.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md031");

const testCaseDefault = getTestCase(dirName);
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

const testCaseListItemTrue = getTestCase(dirName, [
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

const testCaseListItemFalse = getTestCase(dirName, [
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
