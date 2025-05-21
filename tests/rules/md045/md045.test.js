import rule from "../../../lib/rules/md045.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md045");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD045 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Images should have alternate text (alt text)",
      "Images should have alternate text (alt text)",
    ]),
  ],
});
