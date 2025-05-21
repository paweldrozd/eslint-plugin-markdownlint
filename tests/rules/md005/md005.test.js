import rule from "../../../lib/rules/md005.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md005");

const testCase = getTestCase(dirName);
ruleTester.run("MD005", rule, {
  valid: [testCase.valid("correct")],
  invalid: [
    testCase.invalid("incorrect", [
      "Inconsistent indentation for list items at the same level: Expected: 2; Actual: 3",
    ]),
  ],
});
