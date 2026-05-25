import rule from "../../../lib/rules/md056.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md056");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD056 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid("invalid", [
      "Table column count: Expected: 2; Actual: 3; Too many cells, extra data will be missing",
    ]),
  ],
});
