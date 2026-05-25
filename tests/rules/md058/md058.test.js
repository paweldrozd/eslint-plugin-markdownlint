import rule from "../../../lib/rules/md058.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md058");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD058 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Tables should be surrounded by blank lines [Context: | a | b |]"],
      "fixed"
    ),
  ],
});
