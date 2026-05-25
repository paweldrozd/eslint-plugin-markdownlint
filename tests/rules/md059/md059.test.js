import rule from "../../../lib/rules/md059.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md059");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD059 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Link text should be descriptive [Context: [click here]]",
    ]),
  ],
});
