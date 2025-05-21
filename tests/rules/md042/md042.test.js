import rule from "../../../lib/rules/md042.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md042");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD042 (default)", rule, {
  valid: [testCaseDefault.valid("valid-link"), testCaseDefault.valid("valid-fragment")],
  invalid: [
    testCaseDefault.invalid("invalid-link", [
      "No empty links [Context: [an empty link]()]",
    ]),
    testCaseDefault.invalid("invalid-fragment", [
      "No empty links [Context: [an empty fragment](#)]",
    ]),
  ],
});
