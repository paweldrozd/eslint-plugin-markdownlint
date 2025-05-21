import rule from "../../../lib/rules/md044.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md044");

// By default, this rule is disabled

const testCaseJavaScript = getTestCase(dirName, [
  {
    names: ["JavaScript"],
    code_blocks: true,
  },
]);
ruleTester.run("MD044 (names=['JavaScript'], code_blocks=true)", rule, {
  valid: [testCaseJavaScript.valid("valid")],
  invalid: [
    testCaseJavaScript.invalid(
      "invalid",
      [
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javascript",
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javaScript",
      ],
      "valid"
    ),
    testCaseJavaScript.invalid(
      "valid-without-cb",
      [
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javaScript",
      ],
      "valid"
    ),
  ],
});

const testCaseJavaScriptWithoutCb = getTestCase(dirName, [
  {
    names: ["JavaScript"],
    code_blocks: false,
  },
]);
ruleTester.run("MD044 (names=['JavaScript'], code_blocks=true)", rule, {
  valid: [
    testCaseJavaScriptWithoutCb.valid("valid"),
    testCaseJavaScriptWithoutCb.valid("valid-without-cb"),
  ],
  invalid: [
    testCaseJavaScriptWithoutCb.invalid(
      "invalid",
      [
        "Proper names should have the correct capitalization: Expected: JavaScript; Actual: javascript",
      ],
      "valid-without-cb"
    ),
  ],
});
