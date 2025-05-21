import rule from "../../../lib/rules/md011.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md011");

const testCaseDefault = getTestCase(dirName);
ruleTester.run("MD011", rule, {
  valid: [testCaseDefault.valid("valid")],
  invalid: [
    testCaseDefault.invalid(
      "invalid",
      ["Reversed link syntax: (Example)[https://www.example.com/]"],
      "valid"
    ),
  ],
});
