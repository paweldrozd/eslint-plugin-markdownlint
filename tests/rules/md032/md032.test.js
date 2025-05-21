import rule from "../../../lib/rules/md032.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md032");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD032 (default)", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Lists should be surrounded by blank lines [Context: * Some]"],
      "valid"
    ),
  ],
});
