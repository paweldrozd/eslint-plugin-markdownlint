import rule from "../../../lib/rules/md047.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md047");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD047 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Files should end with a single newline character"],
      "valid"
    ),
  ],
});
