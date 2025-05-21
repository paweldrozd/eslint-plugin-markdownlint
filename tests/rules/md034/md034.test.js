import rule from "../../../lib/rules/md034.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md034");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD034 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Bare URL used [Context: https://www.example.com/]"],
      "valid"
    ),
  ],
});
