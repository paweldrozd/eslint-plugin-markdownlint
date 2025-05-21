import rule from "../../../lib/rules/md001.js";
import { getTestCase } from "../../utils.js";
import { ruleTester } from "../ruleTester.js";
import path from "path";

const dirName = path.resolve("./tests/rules/md001");

const testCase = getTestCase(dirName);
ruleTester.run("MD001", rule, {
  valid: [
    testCase.valid("tree"),
    testCase.valid("multiple-top-level"),
    testCase.valid("single-header"),
  ],
  invalid: [
    testCase.invalid("skipped-one-level", [
      "Heading levels should only increment by one level at a time: Expected: h2; Actual: h3",
      "Heading levels should only increment by one level at a time: Expected: h4; Actual: h5",
      "Heading levels should only increment by one level at a time: Expected: h4; Actual: h5",
    ]),
  ],
});
